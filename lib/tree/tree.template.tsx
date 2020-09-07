import React, {useState} from 'react';
import Tree, {SourceDataItem} from './tree';

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
            {text: '1.1.1', value: '1.1.1'},
            {text: '1.1.2', value: '1.1.2'}
          ]
        },
        {text: '1.2', value: '1.2'}
      ]
    },
    {
      text: '2',
      value: '2'
    }
  ]);
  const [selectedValues, setSelectedValues] = useState(['1.1.1', '1.1.2']);
  const onChange = (item: SourceDataItem, bool: boolean) => {
    if (bool) {
      setSelectedValues([...selectedValues, item.value]);
    } else {
      setSelectedValues(selectedValues.filter(value => value !== item.value));
    }
  };
  return (
    <div>
      <h1>基础模板</h1>
      <div style={{width: 200}}>
        <Tree sourceData={array}
              onChange={onChange}
              selected={selectedValues}
              multiple={true}/>
      </div>
    </div>
  );
};
export default TreeExample;