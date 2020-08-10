import React from 'react';
import Form, {FormValue} from './form';
import {useState, Fragment} from 'react';
import Validator from './validator';
import Button from '../button/button';

const usernames = ['孙', '褚'];
const checkUerName = (username: string, success: () => void, fail: () => void) => {
  if (usernames.indexOf(username) >= 0) {
    success();
  } else {
    fail();
  }
};

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'password', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {
        key: 'username', validator: {
          name: '',
          validate(username: string) {
            return new Promise<void>((resolve, reject) => {
              checkUerName(username, resolve, reject);
            });
          }
        }
      },
    ];
    const errors = Validator(formData, rules);
    setErrors(errors);
  };
  return (
    <div>
      <Form value={formData} fields={fields}
            buttons={
              <Fragment>
                <Button level="important" type={'submit'}>提交</Button>
                <Button>返回</Button>
              </Fragment>
            }
            onChange={(value) => setFormData(value)}
            onSubmit={onSubmit}
            errors={errors}
      />
    </div>
  );
};
export default FormExample;