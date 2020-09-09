// 递归渲染的函数
import {SourceDataItem, TreeProps} from "./statement";
import {ChangeEventHandler, useRef, useState} from "react";
import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";
import useUpDate from "../hooks/useUpdate";

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
    const checked = TreeProps.multiple ? TreeProps.selected.indexOf(item.value) >= 0 : TreeProps.selected === item.value;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (TreeProps.multiple) {
            if (e.target.checked) {
                TreeProps.onChange([...TreeProps.selected, item.value]);
            } else {
                TreeProps.onChange(TreeProps.selected.filter(value => value !== item.value));
            }
        } else {
            if (e.target.checked) {
                TreeProps.onChange(item.value);
            } else {
                TreeProps.onChange("");
            }
        }
    };

    // 点击加号 或 减号执行 节流
    const plus = () => {
        setExpanded(true)
    }
    const less = () => {
        setExpanded(false)
    }
    const [cd, setCd] = useState(false)
    const expand = () => {
        if (cd) {
            return;
        } else {
            plus()
            setCd(true)
            setTimeout(() => {
                setCd(false)
            }, 300)
        }
    };
    const collapse = () => {
        if (cd) {
            return;
        } else {
            less()
            setCd(true)
            setTimeout(() => {
                setCd(false)
            }, 300)
        }
    };
    const [expanded, setExpanded] = useState(true);
    const divRef = useRef<HTMLDivElement>(null);

    useUpDate(expanded, () => {
        if (!divRef.current) {
            return;
        }
        if (expanded) {
            divRef.current.style.position = "absolute";
            divRef.current.style.opacity = "0";
            divRef.current.style.height = "auto";
            const {height} = divRef.current.getBoundingClientRect();
            divRef.current.style.position = "";
            divRef.current.style.opacity = "";
            divRef.current.style.height = "0px";
            divRef.current.getBoundingClientRect();
            divRef.current.style.height = height + "px";
            const afterExpand = () => {
                if (!divRef.current) {
                    return;
                }
                divRef.current.style.height = "";
                divRef.current.classList.add("sun-tree-children-present");
                divRef.current.removeEventListener("transitionend", afterExpand);
            }
            divRef.current.addEventListener("transitionend", afterExpand)
        } else {
            const {height} = divRef.current.getBoundingClientRect();
            divRef.current.style.height = height + "px";
            divRef.current.getBoundingClientRect();
            divRef.current.style.height = "0px";
            const afterCollapse = () => {
                if (!divRef.current) {
                    return;
                }
                divRef.current.style.height = "";
                divRef.current.classList.add('sun-tree-children-gone');
                divRef.current.removeEventListener("transitionend", afterCollapse)
            }
            divRef.current.addEventListener("transitionend", afterCollapse)
        }
    });

    return (
        <div key={item.value} className={sc(classes)}>
            <div className={sc('text')}>
                <input type="checkbox"
                       onChange={onChange}
                       checked={checked}/>
                {item.text}
                {item.children &&
                <span onSelect={e => e.preventDefault()}>
                        {expanded ?
                            <span onClick={collapse}>-</span> :
                            <span onClick={expand}>+</span>}
                </span>
                }
            </div>
            <div ref={divRef} className={sc({children: true, collapsed: !expanded})}>
                {item.children?.map(sub =>
                    <TreeItem key={sub.value} item={sub} level={level + 1} TreeProps={TreeProps}/>
                )}
            </div>
        </div>
    );
};
export default TreeItem;