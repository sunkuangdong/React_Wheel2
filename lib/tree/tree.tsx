import * as React from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './tree.scss';
import {SourceDataItem} from './statement';
import {Props} from './statement';
import {ChangeEventHandler, useState} from 'react';

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
        const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            if (props.multiple) {
                if (e.target.checked) {
                    props.onChange([...props.selected, item.value]);
                } else {
                    props.onChange(props.selected.filter(value => value !== item.value));
                }
            } else {
                props.onChange(item.value);
            }
        };
        const expand = () => {
            setExpanded(true)
        };
        const collapse = () => {
            setExpanded(false)
        };
        const [expanded, setExpanded] = useState(true);
        return (
            <div key={item.value} className={sc(classes)}>
                <label className={sc('text')}>
                    <input type="checkbox"
                           onChange={onChange}
                           checked={checkout}/>
                    {item.text}
                    {item.children &&
                    <span onSelect={e => e.preventDefault()}>
                        {expanded ?
                            <span onClick={collapse}>-</span> :
                            <span onClick={expand}>+</span>}
                    </span>
                    }
                </label>
                <div className={sc({children: true, collapsed: !expanded})}>
                    {item.children?.map((child) => renderItem(child, level + 1))}
                </div>
            </div>
        );
    };

    const {children, onChange, ...rest} = props;
    return (
        <div {...rest}>
            {props.sourceData?.map(item => renderItem(item))}
        </div>
    );
};
export default Tree;