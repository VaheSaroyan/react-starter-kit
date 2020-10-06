import ReactDOM from "react-dom";
import React from "react";
import App from "App";
import {removeConsole} from "utils/helper";
import * as serviceWorker from "utils/serviceWorker";
import "global/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);


if(process.env.NODE_ENV === 'production'){
    serviceWorker.register();
    removeConsole()
}else{
    serviceWorker.unregister();
}

