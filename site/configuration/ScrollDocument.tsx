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
                        <td>style</td>
                        <td className="des">原生属性</td>
                        <td className="type">Object</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>onPull</td>
                        <td className="des">参数为函数</td>
                        <td className="type">Function</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default FormDocument;