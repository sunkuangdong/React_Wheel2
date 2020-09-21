import * as React from 'react';
const LayoutDocument = () => {
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
                        <td>style</td>
                        <td className="des">原生 style</td>
                        <td className="type">Object</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td className="des">添加 className</td>
                        <td className="type">string</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default LayoutDocument;