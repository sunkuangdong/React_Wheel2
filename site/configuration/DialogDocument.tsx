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
                        <td>visible</td>
                        <td className="des">是否显示 Dialog</td>
                        <td className="type">Boolean</td>
                        <td className="type">true | false</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>closeOnClickMask</td>
                        <td className="des">外部是否可控</td>
                        <td className="type">Boolean</td>
                        <td className="type">true | false</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>alert</td>
                        <td className="des">开启一个 alert Dialog</td>
                        <td className="type">Function</td>
                        <td className="type">函数参数为 string 类型</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>confirm</td>
                        <td className="des">开启一个 confirm Dialog</td>
                        <td className="type">Function</td>
                        <td className="type">函数参数为 string 类型</td>
                        <td>——</td>
                    </tr>
                    <tr>
                        <td>modal</td>
                        <td className="des">modal函数，开启一个modal的Dialog</td>
                        <td className="type">Function</td>
                        <td className="type">函数接受 JSX 为参数</td>
                        <td>——</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default DialogDocument;