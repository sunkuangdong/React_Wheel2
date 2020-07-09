import React from 'react'
import ReactDom from 'react-dom'
import Icon from './icon'


const fn = () => {
  console.log(1);
}
ReactDom.render(
  <div>
    <Icon name='baidu' onClick={fn}/>
  </div>, document.getElementById('root'))