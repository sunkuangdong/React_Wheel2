import * as React from 'react';
const FormDocument = () => {
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
                </tbody>
            </table>
        </>
    )
}
export default FormDocument;