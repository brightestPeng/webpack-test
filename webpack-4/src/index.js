import { add } from "./main";

function component() {
  var element = document.createElement("div");
  var element = document.createElement("pre");

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + add(5)].join(
    "\n\n"
  );

  return element;
}

document.body.appendChild(component());
