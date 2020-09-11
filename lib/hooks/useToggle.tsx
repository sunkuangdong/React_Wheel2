import {useState} from "react";
// 点击加号 或 减号执行 节流
const useToggle = (initValue: boolean) => {
    const [expanded, setExpanded] = useState(initValue);
    const [cd, setCd] = useState(false);

    // 点击加号 或 减号执行 节流
    const plus = () => {
        setExpanded(true)
    }
    const less = () => {
        setExpanded(false)
    }
    const expand = () => {
        if (cd) {
            return;
        } else {
            plus()
            setCd(true)
            setTimeout(() => {
                setCd(false)
            }, 400)
        }
    };
    const collapse = () => {
        if (cd) {
            return;
        } else {
            less()
            setCd(true)
            setTimeout(() => {
                setCd(false)
            }, 400)
        }
    };
    return {
        expanded,
        expand,
        collapse
    }
};
export default useToggle;