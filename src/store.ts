import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { tuitionReducer } from "./tuition/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  tuition: tuitionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
/* eslint-disable no-underscore-dangle */
const composeEnhancers = compose;
/* eslint-enable */
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
