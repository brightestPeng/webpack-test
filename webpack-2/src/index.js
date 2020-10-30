import _ from "lodash";
import { printMe } from "./print";

function Component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "Webpack1"], " ");
  btn.innerHTML = "click me";
  btn.onclick = printMe;

  element.appendChild(btn);
}

document.body.appendChild(Component());
