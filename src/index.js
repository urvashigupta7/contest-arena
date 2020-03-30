import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
script.setAttribute("id", "MathJax-script");
document.head.appendChild(script);

window.MathJax = {
  loader: { load: ["input/asciimath"] },
  startup: {},
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    processEscapes: true,
  },
};