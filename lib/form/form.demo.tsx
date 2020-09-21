import Demo from '../../site/components/demo/DialogDemo';
import Header from "../../site/components/header/header";
import FormDocument from "../../site/configuration/FormDocument"
import FormExample from "./form.example";
import React from "react";


const x = require('!!raw-loader!./form.example');

const FormDemo = () => {
    return (
        <>
            <Header title="Form 表单" />
            <Demo
                code={x.default}
                title="基本用法"
                introduction="Form 类型"
                content='Form 类型：Form 基本用法。'
            >
                <FormExample />
            </Demo >
            <FormDocument />
        </>
    )
}
export default FormDemo;