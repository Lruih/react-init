import {REACT_TEXT} from './stants';

function render(vdom, container) {
  let dom = createDom(vdom);
  container.appendChild(dom);
}

function createDom(vdom) {
  let {type, props} = vdom;
  let dom;
  if(type == REACT_TEXT) {
    dom = document.createTextNode(type);
  }else {
    dom = document.createElement(type);
  }
  props && updateProps(dom, {}, props);

  return dom;
}

function updateProps(dom, oldProps, newProps) {
  if(newProps) {
    for (var key in newProps) {
      if(ket == 'children') {
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