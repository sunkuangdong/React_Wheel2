import React, { useState } from "react";
import Dialog from "./dialog";
import "./dialog.scss"
import Button from '../button/button';

export default function () {
    const [y, setY] = useState(false)
    return (
        <div>
            <div>
                <Button onClick={() => setY(!y)}>dialog</Button>
                <Dialog visible={y} closeOnClickMask={true} buttons={
                    [
                        <Button level="important" onClick={() => { setY(false) }}>确认</Button>,
                        <Button onClick={() => { setY(false) }}>取消</Button>
                    ]
                } onClose={() => { setY(false) }}>
                    <strong>点击外部可关闭...</strong>
                </Dialog>
            </div>
        </div>
    )
}