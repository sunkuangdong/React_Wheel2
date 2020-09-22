import * as React from 'react';
const DialogDocument = () => {
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
                        <td>dataSource</td>
                        <td className="des">展示城市数据</td>
                        <td className="type">array</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>onChange</td>
                        <td className="des">返回城市名称</td>
                        <td className="type">Function</td>
                        <td className="type">——</td>
                        <td>——</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default DialogDocument;