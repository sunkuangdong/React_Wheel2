import React from "react";
import './importIcons'
import './icon.scss'
import classes from "./helpers/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  // React.MouseEventHandler<SVGElement> | (e:React.MouseEvent) => void
  // onClick: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, ...restProps} = props
  return (
    <svg className={classes('fui-icon', className)}
         {...restProps}
    >
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  )
}

export default Icon;