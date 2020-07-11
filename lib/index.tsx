import React from 'react'
import ReactDom from 'react-dom'
import Icon from './icon/icon'


const fn: React.MouseEventHandler = (e) => {
  console.log(e);
  console.log(e.target);
}
ReactDom.render(
  <div>
    <Icon name='baidu'
          onClick={fn}
    />
  </div>, document.getElementById('root'))