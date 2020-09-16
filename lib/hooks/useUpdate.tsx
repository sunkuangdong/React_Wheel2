import { useEffect, useRef } from "react";

const useUpDate = (dep: boolean, fn: () => void) => {
    console.log("dep");
    console.log(dep);
    const isFirst = useRef(false);
    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false
            return
        }
        fn();
    }, [dep]);
}
export default useUpDate;