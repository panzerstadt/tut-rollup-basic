import { version } from "../package.json";
import bar from "./bar";
import cat from "./baz";

import "./index.css";

const makeCat = () => {
  const container = document.getElementById("cat-container");
  const el = document.createElement("span");
  el.id = "cat";
  el.innerHTML = cat;

  container.appendChild(el);
};
const Test = () => {
  const text = "Hello Rollup world! ";
  const app = document.getElementById("app");

  const el = document.createElement("h1");
  el.id = "child-1";
  el.textContent = text;

  let dynamicImport;
  import("./foo.js").then(({ default: foo }) => {
    dynamicImport = foo;
    el.textContent += dynamicImport;

    makeCat();
  });

  let staticImport = bar;
  el.textContent += staticImport;

  console.log("version: " + version);

  !app.hasChildNodes() && app.appendChild(el);
};

Test();
