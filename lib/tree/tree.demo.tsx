import Demo from '../../site/components/demo/DialogDemo';
import Header from "../../site/components/header/header";
import TreeDocument from "../../site/configuration/TreeDocument"
import TreeExample from "./tree.template";
import React from "react";


const x = require('!!raw-loader!./tree.template');

const TreeDemo = () => {
    return (
        <>
            <Header title="Scroll 滚动加载" />
            <Demo
                code={x.default}
                title="基本用法"
                introduction="Scroll 类型"
                content='Scroll 类型：Scroll 基本用法，自定义好看的滚动条。'
            >
                <TreeExample />
            </Demo >
            <TreeDocument />
        </>
    )
}
export default TreeDemo;