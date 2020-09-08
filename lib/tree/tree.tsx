import * as React from 'react';
import './tree.scss';
import {TreeProps} from './statement';
import TreeItem from "./treeItem";

// 准备他的className
const Tree: React.FunctionComponent<TreeProps> = (props) => {
    return (
        <div>
            {props.sourceData?.map(item =>
                <TreeItem key={item.value}
                          TreeProps={props}
                          item={item}
                          level={1}/>
            )}
        </div>
    );
};
export default Tree;