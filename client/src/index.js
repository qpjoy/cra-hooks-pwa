import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "react-app-polyfill/stable";
import "@/utils/libs/amfe-flexible";
// import * as serviceWorker from "./serviceWorker";
// import * as customSW from "@/utils/libs/customSW";
// import * as storage from "@/utils/storage/customStorage";

// customSW.register();

// storage.setCacheWithChain("a.b.c", "ttt");

// console.log(storage.getCacheWithChain("a.b.c"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register1();
