import { version } from "../package.json";
import bar from "./bar";

const Test = () => {
  // if your js is for the browser, you cannot do code splitting
  let dynamicImport;
  //import("./foo.js").then(({ default: foo }) => (dynamicImport = foo));

  let staticImport = bar;

  console.log("version: " + version);
  const app = document.getElementById("app");

  const el = document.createElement("h1");
  el.textContent =
    "Hello Rollup world! " + (dynamicImport ? dynamicImport : staticImport);
  app.appendChild(el);
};

Test();
