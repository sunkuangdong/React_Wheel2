import Demo from "../demo";
import IconExample from "./icon.example";
import React from "react";


const x = require('!!raw-loader!./icon.example');

const IconDemo = () => {
  return (
    <Demo code={x.default}>
      <IconExample></IconExample>
    </Demo>
  )
}
export default IconDemo;