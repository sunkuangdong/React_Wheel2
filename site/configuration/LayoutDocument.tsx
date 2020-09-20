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
                        <td>visible</td>
                        <td className="des">是否显示 Dialog</td>
                        <td className="type">Boolean</td>
                        <td className="type">true | false</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default LayoutDocument;