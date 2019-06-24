var version = "0.1";

var bar = "with tree shaking!";

var Test = function Test() {

  var staticImport = bar;
  console.log("version: " + version);
  var app = document.getElementById("app");
  var el = document.createElement("h1");
  el.textContent = "Hello Rollup world! " + ( staticImport);
  app.appendChild(el);
};

Test();
