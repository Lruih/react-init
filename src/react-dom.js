import {REACT_TEXT} from './stants';

function render(vdom, container) {
  mount(vdom, container);
}

function mount(vdom, container) {
  let dom = createDom(vdom);
  container.appendChild(dom);
}

function createDom(vdom) {
  let {type, props, content} = vdom;
  let dom;
  if(type == REACT_TEXT) {
    dom = document.createTextNode(content);
  }else if(typeof type == 'function') {
    return mountFunctionComponent(vdom);
  }else {
    dom = document.createElement(type);
  }

  if(props) {
    updateProps(dom, {}, props);
    let children = props.children;
    children && changeChildren(children, dom)
  }

  return dom;
}

//处理函数式组件
function mountFunctionComponent(vdom) {
  const {type, props} = vdom;
  let functionVdom = type(props);
  return createDom(functionVdom);
}

//处理children
function changeChildren(children, dom) {
  //1. 有一个children
  if (typeof children == 'object' && children.type) {
    mount(children, dom)
  }else if(Array.isArray(children)) { //多个儿子
    children.forEach(item => mount(item, dom))
  }
}
//更新属性
function updateProps(dom, oldProps, newProps) {
  if(newProps) {
    for (var key in newProps) {
      if(key == 'children') {
        continue;
      }else if(key == 'style') {
        let styleObj = newProps[key];
        for(let currentStyle in styleObj) {
          dom.style[currentStyle] = styleObj[currentStyle];
        }
      }else {
        dom[key] = newProps[key];
      }
    }
  }

  if(oldProps) {
    for(key in oldProps) {
      if(!newProps[key]){
        dom[key] = null;
      }
    }
  }
}

const ReactDOM = {
  render
}

export default ReactDOM;