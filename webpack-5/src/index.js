import { add } from "./main";

import "./index.less";

console.log(process.env.NODE_ENV);

function component() {
  var element = document.createElement("div");
  var element = document.createElement("pre");

  // lodash 是由当前 script 脚本 import 导入进来的
  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.innerHTML = ["Hello webpack!", "5 cubed issssssssssssssssdddssssss equal to11112222" + add(5,3)].join(
    "\n\n"
  );

  return element;
}

document.body.appendChild(component());
