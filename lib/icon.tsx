import React from "react";
import './importIcons'
import './icon.scss'

interface IconProps {
  name: string;
  // React.MouseEventHandler<SVGElement> | (e:React.MouseEvent) => void
  onClick: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className='fui-icon' onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  )
}

export default Icon;