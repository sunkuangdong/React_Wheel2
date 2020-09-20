import Demo from '../../site/components/demo/DialogDemo';
import Header from "../../site/components/header/header";
import LayoutDocument from "../../site/configuration/LayoutDocument"
import LayoutExample from "./layout.example";
import LayoutExample2 from "./layout.example2";
import LayoutExample3 from "./layout.example3";
import LayoutExample4 from "./layout.example4";
import React from "react";


const x = require('!!raw-loader!./layout.example');
const x2 = require('!!raw-loader!./layout.example2');
const x3 = require('!!raw-loader!./layout.example3');
const x4 = require('!!raw-loader!./layout.example4');

const LayoutDemo = () => {
    return (
        <>
            <Header title="Layout 对话框" />
            <Demo
                code={x.default}
                title="基础布局"
                introduction="Layout 基础布局"
                content='Layout 有四种类型：Layout 基础布局。'
            >
                <LayoutExample />
            </Demo >
            <Demo
                code={x2.default}
                title="中间区域布局"
                introduction="Layout 布局"
                content='Layout 有四种类型：对中间内容布局。'
            >
                <LayoutExample2 />
            </Demo >
            <Demo
                code={x3.default}
                title="中间区域布局"
                introduction="Layout 布局"
                content='Layout 有四种类型：对中间内容布局。'
            >
                <LayoutExample3 />
            </Demo >
            <Demo
                code={x4.default}
                title="独特布局"
                introduction="Layout 布局"
                content='Layout 有四种类型：对 aside 的特殊处理。'
            >
                <LayoutExample4 />
            </Demo >
            <LayoutDocument />
        </>
    )
}
export default LayoutDemo;