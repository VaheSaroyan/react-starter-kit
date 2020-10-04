import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {removeConsole} from "./utils/helper";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


if(process.env.NODE_ENV === 'production'){
    serviceWorker.register();
    removeConsole()
}else{
    serviceWorker.unregister();
}

