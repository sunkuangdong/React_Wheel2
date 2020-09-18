import * as React from 'react';
const ButtonDocument = () => {
    return (
        <>
            <section>
                <h2>Attributes</h2>
            </section>
            <table className="api-table">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th className="des">说明</th>
                        <th className="type">类型</th>
                        <th className="type">可选值</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>level</td>
                        <td className="des">不同样式风格的按钮</td>
                        <td className="type">string</td>
                        <td className="type">important | warning | normal | delete</td>
                        <td>normal</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td className="des">内嵌 Icon 图标的 name 属性</td>
                        <td className="type">string</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td className="des">自定义 Button 类名</td>
                        <td className="type">string</td>
                        <td className="type"></td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td className="des">自定义 Button 样式</td>
                        <td className="type">React.CSSProperties</td>
                        <td className="type"></td>
                        <td>——</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default ButtonDocument;