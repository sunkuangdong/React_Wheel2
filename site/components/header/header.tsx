import React from "react";

interface Props {
    title: string
}

const Header: React.FC<Props> = (props) => {
    return (
        <section>
            <h1>{props.title}</h1>
            <p className="text">点击以开始即时操作。</p>
        </section>
    )
}
export default Header;