import Demo from '../../site/components/demo/IconDocument';
import React from 'react';
import UnFoldExample from './unfold.example'

const x = require('!!raw-loader!./unfold.example');

const UnfoldDemo = () => {
  return (
    <Demo
      code={x.default}
      title=""
      introduction=""
      content="">
      <UnFoldExample />
    </Demo>
  );
};

export default UnfoldDemo;
