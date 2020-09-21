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
                        <td>value</td>
                        <td className="des">表单数据对象</td>
                        <td className="type">object</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>fields</td>
                        <td className="des">表单验证规则</td>
                        <td className="type">object</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>validator</td>
                        <td className="des">自定义校验</td>
                        <td className="type">Function</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>errors</td>
                        <td className="des">自定义表单校验信息的显示方式</td>
                        <td className="type">object</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>transformError</td>
                        <td className="des">自定义表单校验信息的错误提示文字</td>
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