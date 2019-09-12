import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { React } from "react";

const initalState = {};
const middleware = [thunk];

let store;
const ReactReduxDecTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
if (window.navigator.userAgent.includes("Chrome") && ReactReduxDecTools) {
  store = createStore(
    rootReducer,
    initalState,
    compose(
      applyMiddleware(...middleware),
      ReactReduxDecTools
    )
  );
} else {
  store = createStore(
    rootReducer,
    initalState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
