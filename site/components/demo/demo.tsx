import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import './demo.scss';
import theme from 'prism-react-renderer/themes/vsDark';
import { CodeBox } from '../index'
import IocnDocument from "../../configuration/IconDocument"
import ButttonDocument from "../../configuration/ButttonDocument"

type Props = {
    code: string;
    title: string;
    introduction: string;
    content: string;
}
const Demo: React.FunctionComponent<Props> = (props) => {
    const code = <Highlight {...defaultProps} theme={theme} code={props.code} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>;
    return (
        <div>
            <section>
                <h1>{props.title}</h1>
                <p className="text">点击以开始即时操作。</p>
            </section>
            {/* 代码展示区 */}
            <section>
                <h2>代码示例</h2>
                <div className="example">
                    <div className="container">{props.children}</div>
                    <CodeBox
                        title={props.introduction}
                        description={props.content}
                    >{code}
                    </CodeBox>
                </div>
                {props.title.indexOf("Icon") >= 0 ? <IocnDocument /> : null}
                {props.title.indexOf("Button") >= 0 ? <ButttonDocument /> : null}
            </section>
        </div>
    );
};

export default Demo;
