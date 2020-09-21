import Demo from '../../site/components/demo/DialogDemo';
import Header from "../../site/components/header/header";
import CityDocument from "../../site/configuration/CityDocument"
import CitySelectExample from "./citySelect.example";
import React from "react";


const x = require('!!raw-loader!./citySelect.example');

const CitySelectDemo = () => {
    return (
        <>
            <Header title="City 城市组件" />
            <Demo
                code={x.default}
                title="基本用法"
                introduction="City 类型"
                content='City 类型：City 城市组件，基本用法。'
            >
                <CitySelectExample />
            </Demo >
            <CityDocument />
        </>
    )
}
export default CitySelectDemo;