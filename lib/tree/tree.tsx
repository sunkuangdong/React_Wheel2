import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './tree.scss';

interface SourceDataItem {
  text: string,
  value: string,
  children?: SourceDataItem[]
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  sourceData?: SourceDataItem[]
}

// 准备他的className
const scopedClass = scopedClassMaker('sun-tree');
const sc = scopedClass;
// 递归渲染的函数
const renderItem = (item: SourceDataItem, level = 1) => {
  const classes = {
    ['level-' + level]: true,
    'item': true
  };
  return (
    <div key={item.value} className={sc(classes)}>
      {item.text}
      {item.children?.map((child) => {
        return renderItem(child, level + 1);
      })}
    </div>
  );
};
const Tree: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  return (
    <div {...rest}>
      {props.sourceData?.map(item => {
        return renderItem(item);
      })}
    </div>
  );
};
export default Tree;