import { REACT_ELEMENT } from "./stants";
import { toObject } from "./util";

//jsx => babel
function creatElement(type, config, children) {

  //deal with key ref attr
  let key = config?.key ?? '';
  let ref = config?.ref ?? '';
  delete config?.key;
  delete config?.ref;


  let props = {...config};
  if(config) {
    if(arguments.length > 3) {
      //more children
      props.children = Array.prototype.slice.call(arguments, 2);
    }else if(arguments.length === 3) {
      //one children
      props.children = toObject(children);
    }
  }
  return {//vnode
    $$typeofs: REACT_ELEMENT,
    key,
    ref,
    type,
    props
  }
}

const React = {
  creatElement
}

export default React;