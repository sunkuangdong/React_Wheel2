import * as React from "react";
import {HTMLAttributes, UIEventHandler, useEffect, useRef, useState} from "react";
import classes from "../helpers/classes";
import "./scroll.scss"
import scrollbarWidth from "./scroll_whith";

interface Props extends HTMLAttributes<HTMLDivElement> {
}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props
    const [barHeight, setBarHeight] = useState(0);
    const onscroll: UIEventHandler = (e) => {

    };
    // useRef 获取DOM元素
    const contanerRef = useRef<HTMLDivElement>(null);
    // 页面渲染之后Hocks API，如果第二个参数是[]，相当于之前的mounted生命周期
    useEffect(() => {
        const scrollHeight = contanerRef.current!.scrollHeight;
        const viewHeight = contanerRef.current!.getBoundingClientRect().height;
        setBarHeight(viewHeight * viewHeight / scrollHeight);
    }, [])
    return (
        <div {...rest} className={classes("sun-scroll")}>
            <div className={classes("sun-scroll-inner")} style={{right: -scrollbarWidth()}}
                 onScroll={onscroll} ref={contanerRef}>
                {children}
            </div>
            <div className={classes("sun-scroll-track")}>
                <div className={classes("sun-scroll-bar")} style={{height: barHeight}}/>
            </div>
        </div>
    )
}
export default Scroll;