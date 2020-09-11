// 递归渲染的函数
import {SourceDataItem, TreeProps} from "./statement";
import {ChangeEventHandler, useRef} from "react";
import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";
import useUpDate from "../hooks/useUpdate";
import useToggle from "../hooks/useToggle";

interface Props {
    item: SourceDataItem;
    level: number;
    TreeProps: TreeProps;
    onItemChange: (values: string[]) => void
}

interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {
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
        const childrenValues = collectChildrenValues(item)
        if (TreeProps.multiple) {
            if (e.target.checked) {
                props.onItemChange([...TreeProps.selected, item.value, ...childrenValues]);
            } else {
                props.onItemChange(TreeProps.selected.filter(
                    value => value !== item.value && childrenValues.indexOf(value) === -1));
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
    const {expanded, expand, collapse} = useToggle(true)
    const divRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

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

    // 半选逻辑--子代被选中通知 父带 和 最外层
    const onItemChange = (values: string[]) => {
        // 子代被选中了
        const childrenValues = collectChildrenValues(item);
        const common = intersect(values, childrenValues);
        if (common.length !== 0) {
            props.onItemChange(Array.from(new Set(values.concat(item.value))))
            inputRef.current!.indeterminate = common.length !== childrenValues.length;
        } else {
            props.onItemChange(values.filter(v => v !== item.value));
            inputRef.current!.indeterminate = false;
        }
    }
    return (
        <div key={item.value} className={sc(classes)}>
            <div className={sc('text')}>
                <input type="checkbox"
                       ref={inputRef}
                       onChange={onChange}
                       checked={checked}
                       className="sun-tree-level-input"/>
                <span className="sun-tree-level-distance">{item.text}</span>
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
                    <TreeItem key={sub.value}
                              item={sub}
                              level={level + 1}
                              onItemChange={onItemChange}
                              TreeProps={TreeProps}/>
                )}
            </div>
        </div>
    );
};
export default TreeItem;

// 点击任意一级，返回所有值组成的数组
const collectChildrenValues = (item: SourceDataItem): string[] => {
    return flatten(item.children?.map(
        items => [items.value, collectChildrenValues(items)]))
}
const flatten = (array?: RecursiveArray<string>): string[] => {
    if (!array) {
        return [];
    }
    return array.reduce<string[]>(
        (result, current) =>
            result.concat(typeof current === "string" ? current : flatten(current)), [])
}

function intersect<T>(array1: T[], array2: T[]): T[] {
    const result: T[] = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) >= 0) {
            result.push(array1[i])
        }
    }
    return result;
}