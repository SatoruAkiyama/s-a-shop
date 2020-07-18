import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import ScrollTop from "./components/scroll-top/ScrollTop";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollTop>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ScrollTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);