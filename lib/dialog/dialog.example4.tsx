import React from "react";
import { modal } from "./dialog";
import "./dialog.scss"
import Button from '../button/button';

export default function () {
  const openModal = () => {
    const close = modal(
      <div>
        <span>你好</span>
        <Button onClick={() => close()}>close</Button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Button onClick={openModal}>modal</Button>
      </div>
    </div>
  )
}