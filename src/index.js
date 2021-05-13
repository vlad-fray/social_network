import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let rerenderEntireTree = () => {
  ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

reportWebVitals();
