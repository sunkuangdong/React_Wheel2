import React, {HTMLAttributes} from 'react';

interface SourceDataItem {
  text: string,
  value: string,
  children?: SourceDataItem[]
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  sourceData?: SourceDataItem[]
}

// 递归渲染的函数
const x = (item: SourceDataItem) => {
  return (
    <div key={item.value}>
      {item.text}
      {item.children?.map((child) => {
        return x(child);
      })}
    </div>
  );
};
const Tree: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  return (
    <div {...rest}>
      {props.sourceData?.map(item => {
        return x(item);
      })}
    </div>
  );
};
export default Tree;