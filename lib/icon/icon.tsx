import React from "react";
import './importIcons';
import './icon.scss';
import classes from "../helpers/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  // React.MouseEventHandler<SVGElement> | (e:React.MouseEvent) => void
  // onClick: React.MouseEventHandler<SVGElement>
}


const Icon: React.FunctionComponent<IconProps> = (
  {className, name, ...restProps}
) => {
  return (
    <svg className={classes('fui-icon', className)}
         {...restProps}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  )
}

export default Icon;