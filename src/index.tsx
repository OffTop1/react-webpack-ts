import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <HelloWorld />
    </Provider>,
    document.getElementById("root"));

// module.hot.accept();