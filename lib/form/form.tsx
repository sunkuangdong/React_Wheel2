import * as React from 'react';
import {ReactFragment} from 'react';

export interface FormValue {
  [k: string]: string;
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>,
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [key: string]: string[] }
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
      {props.fields.map(item =>
        <div key={item.name}>
          {item.label}
          <input type={item.input.type} value={formData[item.name]}
                 onChange={(e) => onInputChange(item.name, e.target.value)}
          />
          <div>{props.errors[item.name]}</div>
        </div>
      )}
      <div>
        {props.buttons}
      </div>
    </form>
  );
};
export default Form;