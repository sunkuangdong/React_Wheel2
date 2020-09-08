// 递归渲染的函数
import {SourceDataItem, TreeProps} from "./statement";
import {ChangeEventHandler, useState} from "react";
import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

interface Props {
    item: SourceDataItem
    level: number;
    TreeProps: TreeProps
}

// 准备他的className
const scopedClass = scopedClassMaker('sun-tree');
const sc = scopedClass;
const TreeItem: React.FC<Props> = (props) => {
    const {item, level, TreeProps} = props;
    const classes = {
        ['level-' + level]: true,
        'item': true
    };
    const checkout = TreeProps.multiple ?
        TreeProps.selected.indexOf(item.value) >= 0 :
        TreeProps.selected === item.value;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (TreeProps.multiple) {
            if (e.target.checked) {
                TreeProps.onChange([...TreeProps.selected, item.value]);
            } else {
                TreeProps.onChange(TreeProps.selected.filter(value => value !== item.value));
            }
        } else {
            TreeProps.onChange(item.value);
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
                {item.children?.map(sub =>
                    <TreeItem key={sub.value} item={sub} level={level + 1} TreeProps={TreeProps}/>
                )}
            </div>
        </div>
    );
};
export default TreeItem;