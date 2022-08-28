export interface DummyType {
  name: string,
  age: number,
  title: string,
  data: Array<number>
}

export enum ACTION_TYPE {
  DUMMY_INIT = "DUMMY_INIT",
  DUMMY_LOADED = "DUMMY_LOADED",
  DUMMY_ERRORED = "DUMMY_ERRORED",
}