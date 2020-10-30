import _ from "lodash";
import { printMe } from "./print";

import "./index.css"

function Component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "Webpack1"], " ");
  btn.innerHTML = "click me";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(Component());

console.log(module.hot);

if(module.hot){
  module.hot.accept('./print.js',()=>{
    console.log("Accepting the updated printMe module");
  })
}
