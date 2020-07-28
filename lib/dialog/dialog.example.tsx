import React, {useState} from "react";
import Dialog, {alert, confirm, modal} from "./dialog";
import "./dialog.scss"

export default function () {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  const openModal = () => {
    const close = modal(
      <h1>你好
        <button onClick={() => close()}>close</button>
      </h1>
    );
  }
  return (
    <div>
      <div>
        <h1>example 2</h1>
        <button onClick={() => setX(!x)}>dialog</button>
        <Dialog visible={x} buttons={
          [
            <button onClick={() => {setX(false)}}>确认</button>,
            <button onClick={() => {setX(false)}}>取消</button>
          ]
        } onClose={() => {setX(false)}}>
          <strong>hi</strong>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <button onClick={() => setY(!y)}>dialog</button>
        <Dialog visible={y} closeOnClickMask={true} buttons={
          [
            <button onClick={() => {setY(false)}}>1</button>,
            <button onClick={() => {setY(false)}}>2</button>
          ]
        } onClose={() => {setY(false)}}>
          <strong>hi</strong>
        </Dialog>
      </div>
      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
        <button onClick={() => confirm('1',
          () => {console.log('你点击了yes')},
          () => {console.log('你点击了no')})}>
          confirm
        </button>
      </div>
      <div>
        <h1>example 4</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
  )
}