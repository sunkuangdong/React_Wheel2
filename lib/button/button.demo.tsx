import Demo from '../../site/components/demo/demo';
import ButtonExample from "./button.example";
import React from "react";


const x = require('!!raw-loader!./button.example');

const ButtonDemo = () => {
    return (
        <>  
            <Demo
                code={x.default}
                title="Button 按钮"
                introduction="Button 类型"
                content='Button 有两种类型：Button 默认展示、Button 效果展示。'
            >
                <ButtonExample />
            </Demo >
        </>
    )
}
export default ButtonDemo;