import { ActionType } from './Types/storeTypes';
import { DummyType, ACTION_TYPE } from './Types/dummy'

const INITIAL_STATE: DummyType = {
  name: "Test",
  age: 25,
  title: 'Yolo This is test data',
  data: [12, 23, 56]
};
function dummyReducer(
  state = INITIAL_STATE,
  action: ActionType<ACTION_TYPE>
) {
  switch (action.type) {
    case ACTION_TYPE.DUMMY_INIT:
      return { ...state, ...action.payload };
    case ACTION_TYPE.DUMMY_LOADED:
      return { ...state, ...action.payload };
    case ACTION_TYPE.DUMMY_ERRORED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export { dummyReducer };