import React from "react"
import Button from "./button"

const ButtonExample: React.FC = () => {
    return (
        <>
            <Button>确认</Button>
            <Button>取消</Button>
            <Button level="important">important</Button>
            <Button level="warning">warning</Button>
            <Button level="delete">delete</Button>
            <Button level="important" icon="search">查找</Button>
        </>
    )
}
export default ButtonExample;
