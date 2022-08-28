export interface ActionType<T> {
  type: T;
  payload: any;
}

export enum DataStatus {
  NOT_REQUESTED,
  INIT,
  LOADED,
  ERRORED,
}

export interface RemoteData<T> {
  data?: T;
  status: DataStatus;
  error?: string;
}
