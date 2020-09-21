import React, { useState } from 'react';
import Tree from './tree';

const TreeExample: React.FunctionComponent = () => {
    const [array,] = useState([
        {
            text: '1',
            value: '1',
            children: [
                {
                    text: '1.1',
                    value: '1.1',
                    children: [
                        { text: '1.1.1', value: '1.1.1' },
                        { text: '1.1.2', value: '1.1.2' }
                    ]
                },
                { text: '1.2', value: '1.2' }
            ]
        },
        {
            text: '2',
            value: '2'
        }
    ]);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    return (
        <div>
            <div>
                <div style={{ width: "100%" }}>
                    <Tree sourceData={array}
                        onChange={(value) => setSelectedValues(value)}
                        selected={selectedValues}
                        multiple={true} />
                </div>
            </div>
        </div>
    );
};
export default TreeExample;