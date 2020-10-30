import _ from "lodash";

function Component() {
  let element = document.createElement("div");

  element.innerHTML = _.concat(["A"], "B");

  import("./b").then((btn) => {
    btn.onclick = () => {
      console.log("点击按钮!");
    };
    element.appendChild(btn);
  });

  import("./a").then((A) => {
    element.appendChild(A);
  });

  import("./c").then((A) => {
    element.appendChild(A);
  });

  return element;
}

document.body.appendChild(Component());
