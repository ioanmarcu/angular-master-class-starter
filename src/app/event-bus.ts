export interface EventBusArgs {
  data: any;
  type: EventType;
}

export enum EventType {
  APP_TITILE_CHANGE
}
