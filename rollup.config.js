import html from "rollup-plugin-bundle-html";
import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";

// if only es6 browsers, then no babbel needed
// babel allows polyfilling per browser, with targets for which browser

export default {
  input: ["src/index.js"],
  output: {
    dir: "dist",
    format: "esm" // https://rollupjs.org/guide/en#big-list-of-options
  },
  experimentalCodeSplitting: true,
  plugins: [
    json(),
    html({
      template: "public/index.html",
      dest: "dist",
      filename: "index.html"
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
            useBuiltIns: "usage", // usebuiltins means you can set polyfills per browser (e.g. edge needs finally() therefore it is only imported in edge
            corejs: 3
          }
        ]
      ],
      sourceMaps: false
    })
  ]
};
