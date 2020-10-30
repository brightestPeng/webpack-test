import _ from "lodash";

import "./index.less";

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["hello", "webpack","精选推荐"], " ");

  return element;
}

document.body.appendChild(component());
