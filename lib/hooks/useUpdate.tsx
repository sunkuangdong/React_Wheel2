import { useEffect, useRef } from "react";

const useUpDate = (dep: boolean, fn: () => void) => {
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