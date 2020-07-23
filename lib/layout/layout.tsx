import React from 'react'
import './layout.scss'
import {scopedClassMaker} from "../classes";

const sc = scopedClassMaker('sun-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  console.log(props.children);
  return (
    <div className={sc('', {extra: className})} {...rest}>
      {props.children}
    </div>
  )
};
export default Layout;