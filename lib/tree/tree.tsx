import React from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './tree.scss';

export interface SourceDataItem {
  text: string,
  value: string,
  children?: SourceDataItem[],
}

type Props = {
  sourceData?: SourceDataItem[],
  onChange: (item: SourceDataItem, bool: boolean) => void
} & ({ selected: string[], multiple: true } | { selected: string, multiple?: false })

// 准备他的className
const scopedClass = scopedClassMaker('sun-tree');
const sc = scopedClass;
const Tree: React.FunctionComponent<Props> = (props) => {
// 递归渲染的函数
  const renderItem = (
    item: SourceDataItem,
    level = 1) => {
    const classes = {
      ['level-' + level]: true,
      'item': true
    };
    const checkout = props.multiple ?
      props.selected.indexOf(item.value) >= 0 :
      props.selected === item.value;
    return (
      <div key={item.value} className={sc(classes)}>
        <div className={sc('text')}>
          <input type="checkbox"
                 onChange={(e) => props.onChange(item, e.target.checked)}
                 checked={checkout}/>
          {item.text}
        </div>
        {item.children?.map((child) => {
          return renderItem(child, level + 1);
        })}
      </div>
    );
  };

  const {children, onChange, ...rest} = props;
  return (
    <div {...rest}>
      {props.sourceData?.map(item => {
        return renderItem(item);
      })}
    </div>
  );
};
export default Tree;