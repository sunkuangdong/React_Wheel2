import * as React from 'react';
const IocnDocument = () => {
    return (
        <>
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
                        <td>name</td>
                        <td className="des">内嵌 Icon 图标的 name 属性</td>
                        <td className="type">string</td>
                        <td>——</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default IocnDocument;