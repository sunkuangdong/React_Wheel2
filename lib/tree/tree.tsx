import React, {HTMLAttributes} from 'react';

interface SourceDataItem {
  text: string,
  value: string,
  children?: SourceDataItem[]
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  sourceData: SourceDataItem[]
}

const Tree: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  return (
    <div {...rest}>
      {props.sourceData.map(item => {
        return <div>
          {item.text}
          {item.children && item.children.map(child => {
            return <div>{child.text}</div>;
          })}
        </div>;
      })}
    </div>
  );
};
export default Tree;