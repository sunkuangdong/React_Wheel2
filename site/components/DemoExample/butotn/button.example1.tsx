import * as React from 'react';

type Props = {
    props: React.PropsWithChildren<Props>;
}
const ButtonExample1: React.FC<Props> = (props) => {
    console.log(props);

    return (
        <section>
            <h2>代码示例</h2>
            <div className="example">
                <div className="container">{props.children}</div>
                {/* <CodeBox
                    title={props.introduction}
                    description={props.content}
                >{code}
                </CodeBox> */}
            </div>
        </section>
    )
}
export default ButtonExample1;