import Demo from '../../site/components/demo/DialogDemo';
import Header from "../../site/components/header/header";
import DialogDocument from "../../site/configuration/DialogDocument"
import DialogExample from "./dialog.example";
import DialogExample2 from "./dialog.example2";
import DialogExample3 from "./dialog.example3";
import DialogExample4 from "./dialog.example4";
import React from "react";


const x = require('!!raw-loader!./dialog.example');
const x2 = require('!!raw-loader!./dialog.example2');
const x3 = require('!!raw-loader!./dialog.example3');
const x4 = require('!!raw-loader!./dialog.example4');

const DialogDemo = () => {
    return (
        <>
            <Header title="Dialog 对话框" />
            <Demo
                code={x.default}
                title="基本用法"
                introduction="Dialog 类型"
                content='Dialog 有四种类型：Dialog 基本用法。'
            >
                <DialogExample />
            </Demo >
            <Demo
                code={x2.default}
                title="点击外部可关闭"
                introduction="Dialog 类型"
                content='Dialog 有四种类型：Dialog 点击外部可关闭，参数 closeOnClickMask 为 true。'
            >
                <DialogExample2 />
            </Demo >
            <Demo
                code={x3.default}
                title="简化方式"
                introduction="Dialog 类型"
                content='Dialog 有四种类型：Dialog 简化方式，函数alert、confirm接收参数为 string 类型，展示内容。'
            >
                <DialogExample3 />
            </Demo >
            <Demo
                code={x4.default}
                title="关闭按钮在内部"
                introduction="Dialog 类型"
                content='Dialog 有四种类型：Dialog 关闭按钮在内部，如果你需要关闭按钮在内部，请按照下面的方式进行，modal接受JSX语法。'
            >
                <DialogExample4 />
            </Demo >
            <DialogDocument />
        </>
    )
}
export default DialogDemo;