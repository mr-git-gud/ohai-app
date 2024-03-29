import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
// import { logger } from "redux-logger";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  fillRegisterForm,
  fillSigninForm,
  changeRoute,
  setLoggedInCreds,
  setComposeInputField,
  setSfwScoreResults,
  uploadImagesToCloudinary,
  pushPostsToChatBox,
  setPmCreds,
  setConnectedSockets,
  toggleModal
} from "./reducers";

const rootReducer = combineReducers({
  fillRegisterForm,
  fillSigninForm,
  changeRoute,
  setLoggedInCreds,
  setComposeInputField,
  setSfwScoreResults,
  uploadImagesToCloudinary,
  pushPostsToChatBox,
  setPmCreds,
  setConnectedSockets,
  toggleModal
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
