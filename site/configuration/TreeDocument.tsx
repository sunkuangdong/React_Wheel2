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
                        <td>sourceData</td>
                        <td className="des">展示数据</td>
                        <td className="type">array</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>onChange</td>
                        <td className="des">状态发生变化时的回调</td>
                        <td className="type">——</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>selected</td>
                        <td className="des">默认选中</td>
                        <td className="type">array | string</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>multiple</td>
                        <td className="des">多选和单选切换，true为多选(必传字段)</td>
                        <td className="type">boolean</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default FormDocument;