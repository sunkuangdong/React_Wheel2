import React from "react";
import  { alert, confirm } from "./dialog";
import "./dialog.scss"
import Button from '../button/button';

export default function () {
  return (
    <div>
      <div>
        <Button onClick={() => alert('1')}>alert</Button>
        <Button onClick={() => confirm('1')}>confirm</Button>
      </div>
    </div>
  )
}