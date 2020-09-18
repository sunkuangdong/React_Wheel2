import React, { ButtonHTMLAttributes } from 'react';
import classes from '../helpers/classes';
import './button.scss';
import Icon from '../icon/icon';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'warning' | 'normal' | "delete";
  icon?: string
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, level, ...rest } = props;
  return (
    <button
      className={classes('sun-button', `sun-button-${level}`, className)}
      {...rest}>
      {!!props.icon ? <Icon name={props.icon} /> : ""}
      <span className={classes("sun-button-text")}>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  level: 'normal'
};

export default Button;