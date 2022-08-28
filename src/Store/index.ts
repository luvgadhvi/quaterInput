import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { dummyReducer } from "../Reducer/dummy.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
/* eslint-disable no-underscore-dangle */
const composeEnhancers = compose;
/* eslint-enable */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) , /* preloadedState, */
);

export default store;
