import Demo from '../../site/components/demo/DialogDemo';
import Header from "../../site/components/header/header";
import TreeDocument from "../../site/configuration/TreeDocument"
import TreeExample from "./tree.template";
import React from "react";


const x = require('!!raw-loader!./tree.template');

const TreeDemo = () => {
    return (
        <>
            <Header title="Tree 树形组件" />
            <Demo
                code={x.default}
                title="基本用法"
                introduction="Tree 类型"
                content='Tree 类型：Tree 基本用法。'
            >
                <TreeExample />
            </Demo >
            <TreeDocument />
        </>
    )
}
export default TreeDemo;