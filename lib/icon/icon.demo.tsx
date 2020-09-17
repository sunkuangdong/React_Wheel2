import Demo from '../../site/components/demo/IconDocument';
import IconExample from "./icon.example";
import React from "react";


const x = require('!!raw-loader!./icon.example');

const IconDemo = () => {
    return (
        <Demo
            code={x.default}
            title="Icon 图标"
            introduction="Icon 类型"
            content='Icon 有一种类型：Icon 展示。'
        >
            <IconExample />
        </Demo >
    )
}
export default IconDemo;