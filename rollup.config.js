import html from "rollup-plugin-bundle-html";
import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss"; // https://github.com/egoist/rollup-plugin-postcss
// MORE: https://devhints.io/rollup

// if only es6 browsers, then no babbel needed
// babel allows polyfilling per browser, with targets for which browser

// esm polyfill: https://github.com/lukeed/svelte-demo/blob/master/public/index.html#L15
// esm polyfill: https://www.npmjs.com/package/dimport

// how to make a library: https://www.freecodecamp.org/news/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e/
// https://github.com/rollup/rollup-plugin-commonjs/issues/239

export default {
  input: ["src/index.js"],
  output: {
    dir: "dist",
    format: "esm" // https://rollupjs.org/guide/en#big-list-of-options
  },
  plugins: [
    resolve(), // get stuff from node_modules and put them in a bundle
    commonjs(), // in order to work with npm packages that are written using commonjs
    json(),
    html({
      template: "public/index.html",
      dest: "dist",
      filename: "index.html",
      defaultmode: "module"
    }),
    postcss({
      modules: false // turn to true to turn on css modules
    }),

    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/plugin-syntax-dynamic-import"],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              ie: 11,
              browsers: "last 2 versions"
            },
            useBuiltIns: "entry", // usebuiltins means you can set polyfills per browser (e.g. edge needs finally() therefore it is only imported in edge
            corejs: 2
          }
        ]
      ],
      sourceMaps: false
    })
  ]
};
