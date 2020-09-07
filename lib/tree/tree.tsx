import React from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './tree.scss';

export interface SourceDataItem {
  text: string,
  value: string,
  children?: SourceDataItem[],
}

interface Props {
  sourceData?: SourceDataItem[],
  selectedValues: string[],
  onChange: (item: SourceDataItem, bool: boolean) => void
}


// 准备他的className
const scopedClass = scopedClassMaker('sun-tree');
const sc = scopedClass;
// 递归渲染的函数
const renderItem = (
  item: SourceDataItem,
  selectedValues: string[],
  onChange: (item: SourceDataItem, bool: boolean) => void,
  level = 1) => {
  const classes = {
    ['level-' + level]: true,
    'item': true
  };
  return (
    <div key={item.value} className={sc(classes)}>
      <div className={sc('text')}>
        <input type="checkbox"
               onChange={(e) => onChange(item, e.target.checked)}
               checked={selectedValues.indexOf(item.value) >= 0}/>
        {item.text}
      </div>
      {item.children?.map((child) => {
        return renderItem(child, selectedValues, onChange, level + 1);
      })}
    </div>
  );
};
const Tree: React.FunctionComponent<Props> = (props) => {
  const {children, selectedValues, onChange, ...rest} = props;
  return (
    <div {...rest}>
      {props.sourceData?.map(item => {
        return renderItem(item, selectedValues, onChange);
      })}
    </div>
  );
};
export default Tree;