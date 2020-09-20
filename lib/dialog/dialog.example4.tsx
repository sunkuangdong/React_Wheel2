import React from "react";
import{ modal } from "./dialog";
import "./dialog.scss"
import Button from '../button/button';

export default function () {
  const openModal = () => {
    const close = modal(
      <h1>
        <span>你好</span>
        <Button onClick={() => close()}>close</Button>
      </h1>
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