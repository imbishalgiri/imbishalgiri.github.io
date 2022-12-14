import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { LoaderSpinner } from "./components";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./hooks";
import App from "./App";

ReactDOM.render(
  <React.Suspense fallback={<LoaderSpinner color="#0099e8" />}>
    <React.StrictMode>
      <AppProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </AppProvider>
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById("root")
);
