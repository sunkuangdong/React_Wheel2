import * as React from 'react';
import {ReactFragment} from 'react';
import Input from '../input/input';
import classes from '../helpers/classes';
import './form.scss';

export interface FormValue {
  [k: string]: string;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>,
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [key: string]: string[] };
  errorsDisplayMode?: 'first' | 'all';
  transformError?: (message: string) => string;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue);
  };
  const transformError = (message: string) => {
    const map: any = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长',
    };
    return props.transformError && props.transformError(message) || map[message] || '未知错误';
  };
  return (
    <form onSubmit={onSubmit}>
      <table className={classes('sun-form-table')}>
        <tbody>
        {props.fields.map(item =>
          <tr className={classes('sun-form-tr')} key={item.name}>
            <td className={'sun-form-td'}>
            <span>
              {item.label}
            </span>
            </td>
            <td className={'sun-form-td'}>
              <Input className={'sun-form-input'}
                     type={item.input.type}
                     value={formData[item.name]}
                     onChange={(e) => onInputChange(item.name, e.target.value)}
              />
              <div className={classes('sun-form-error')}>
                {props.errors[item.name] ?
                  (props.errorsDisplayMode === 'first' ?
                    transformError(props.errors[item.name][0]) :
                    props.errors[item.name].map(transformError).join('，')) :
                  <span>&nbsp;</span>}
              </div>
            </td>
          </tr>
        )}
        <tr className={classes('sun-form-tr')}>
          <td className={classes('sun-form-td')}/>
          <td className={classes('sun-form-td')}>
            {props.buttons}
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
};

Form.defaultProps = {
  errorsDisplayMode: 'first',

};

export default Form;