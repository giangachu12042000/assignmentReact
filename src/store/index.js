import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "../reducers";

// Logger with default options
export default function configStore(initialState = {}) {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const middleware = [logger, thunk];

  const enhancers = [applyMiddleware(...middleware)];
  /* eslint-disable no-underscore-dangle */

  const store = createStore(
    reducer(),
    initialState,
    composeEnhancers(...enhancers)
  );
  /* eslint-enable */
  return store;
}
