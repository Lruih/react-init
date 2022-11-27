import React from './react';
import ReactDOM from './react-dom';

//普通组件
// let ele = <h1 className='title' style={{color: 'red'}}>Hello</h1>

// let ele2 = React.creatElement("h1", {
//   className: 'title',
//   style: {
//     color: 'red'
//   }
// }, 666)

//函数式组件
function FunctionComponent(props) {
  return React.creatElement("h1", {style: {color: 'red'}}, 'hello react');
}

// let ele = <FunctionComponent name="100"></FunctionComponent>

let ele2 = React.creatElement(FunctionComponent, {
  name: "100"
})
//vdom => real dom
ReactDOM.render(
  ele2,
  document.getElementById('root')
);
