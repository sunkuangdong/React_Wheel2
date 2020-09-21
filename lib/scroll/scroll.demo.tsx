import Demo from '../../site/components/demo/DialogDemo';
import Header from "../../site/components/header/header";
import ScrollDocument from "../../site/configuration/ScrollDocument"
import ScrollExample from "./scroll.example";
import ScrollExample2 from "./scroll.example2";
import React from "react";


const x = require('!!raw-loader!./scroll.example');

const ScrollDemo = () => {
    return (
        <>
            <Header title="Scroll 滚动加载" />
            <Demo
                code={x.default}
                title="基本用法"
                introduction="Scroll 类型"
                content='Scroll 类型：Scroll 基本用法，自定义好看的滚动条。'
            >
                <ScrollExample />
            </Demo >
            <Demo
                code={x.default}
                title="移动端 - 下拉刷新"
                introduction="Scroll 类型"
                content='Scroll 类型：Scroll 下拉刷新。'
            >
                <ScrollExample2 />
            </Demo >
            <ScrollDocument />
        </>
    )
}
export default ScrollDemo;