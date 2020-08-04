import * as React from 'react';
import {ReactFragment} from 'react';

interface Props {
  value: { [k: string]: string };
  fields: Array<{ name: string, label: string, input: { type: string } }>,
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler;
}

const Form: React.FunctionComponent<Props> = (props) => {
  return (
    <form>
      {props.fields.map(item =>
        <div key={item.name}>
          {item.label}
          <input type={item.input.type}/>
        </div>
      )}
      <div>
        {props.buttons}
      </div>
    </form>
  );
};
export default Form;