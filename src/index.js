import './index.css';

import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from "./redux/store";

import App from "./App";

console.log(process.env)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
