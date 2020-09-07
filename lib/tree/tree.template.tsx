import React, {useState} from 'react';
import Tree from './tree';

const TreeExample: React.FunctionComponent = () => {
  const [array,] = useState([
    {
      text: '1',
      value: '1',
      children: [
        {text: '1.1', value: '1.1'},
        {text: '1.2', value: '1.2'}
      ]
    },
    {
      text: '2',
      value: '2',
      children: [
        {text: '2.1', value: '2.1'},
        {text: '2.2', value: '2.2'}
      ]
    }
  ]);
  return (
    <div>
      <h1>基础模板</h1>
      <Tree style={{height: '250px', border: '1px solid red'}} sourceData={array}/>
    </div>
  );
};
export default TreeExample;