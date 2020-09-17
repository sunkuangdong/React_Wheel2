import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import './demo.scss';
import theme from 'prism-react-renderer/themes/vsDark';
import { CodeBox } from '../index'

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
            </section>
            {/* 参数文档 */}
            <section>
                <h2>API</h2>
            </section>
            <table className="api-table">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th className="des">说明</th>
                        <th className="type">类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>icon</td>
                        <td className="des">内嵌 Icon 图标的 name 属性</td>
                        <td className="type">string</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>position</td>
                        <td className="des">内嵌 Icon 图标的位置</td>
                        <td className="type">'left' | 'right'</td>
                        <td>'left'</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Demo;
