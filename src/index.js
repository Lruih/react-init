import React from './react';
import ReactDOM from 'react-dom';
// let ele = <h1 className='title' style={{color: 'red'}}>Hello</h1>

let ele2 = React.creatElement("h1", {
  className: 'title',
  style: {
    color: 'red'
  }
}, 666)

console.log(ele2)
ReactDOM.render(
  ele2,
  document.getElementById('root')
);
