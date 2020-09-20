import React, { useState } from "react";
import Dialog from "./dialog";
import "./dialog.scss"
import Button from '../button/button';

export default function () {
  const [x, setX] = useState(false)
  return (
    <div>
      <div>
        <Button onClick={() => setX(!x)}>dialog</Button>
        <Dialog visible={x} buttons={
          [
            <Button level="important" onClick={() => { setX(false) }}>确认</Button>,
            <Button onClick={() => { setX(false) }}>取消</Button>
          ]
        } onClose={() => { setX(false) }}>
          <strong>hi</strong>
        </Dialog>
      </div>
    </div>
  )
}