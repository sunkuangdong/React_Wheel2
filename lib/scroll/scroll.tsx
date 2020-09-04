import * as React from "react";
import {HTMLAttributes} from "react";
import classes from "../helpers/classes";
import "./scroll.scss"
import scrollbarWidth from "./scroll_whith";

interface Props extends HTMLAttributes<HTMLDivElement> {
}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props
    return (
        <div {...rest} className={classes("sun-scroll")}>
           <div className={classes("sun-scroll-inner")} style={{right:-scrollbarWidth()}}>
               {children}
           </div>
        </div>
    )
}
export default Scroll;