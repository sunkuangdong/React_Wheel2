import * as React from 'react';
import './tree.scss';
import {TreeProps} from './statement';
import TreeItem from "./treeItem";

// 准备他的className
const Tree: React.FunctionComponent<TreeProps> = (props) => {
    const onItemChange = (values: string[] | string) => {
        if (props.multiple) {
            props.onChange(Array.from(new Set(values)) as string[]);
        } else {
            props.onChange(values as string);
        }
    }
    return (
        <div>
            {props.sourceData?.map(item =>
                <TreeItem key={item.value}
                          TreeProps={props}
                          onItemChange={onItemChange}
                          item={item}
                          level={1}/>
            )}
        </div>
    );
};
export default Tree;