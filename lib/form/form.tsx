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
  errorsDisplayMode?: 'first' | 'all'
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
  return (
    <form onSubmit={onSubmit}>
      <table className={classes('sun-form-table')}>
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
                   props.errors[item.name][0] : props.errors[item.name].join('，')) :
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
      </table>
    </form>
  );
};

Form.defaultProps = {
  errorsDisplayMode: 'first'
};

export default Form;