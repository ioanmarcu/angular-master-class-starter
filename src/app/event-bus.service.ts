import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {filter, map} from 'rxjs/operators';

export interface EventBusArgs {
  data: any;
  type: string;
}

@Injectable()
export class EventBusService {
  messages$ = new Subject<EventBusArgs>();

  constructor() {
  }

  emit(eventType: string, data: any) {
    this.messages$.next({type: eventType, data: data});
  }

  observe(eventType: string) {
    return this.messages$.pipe(
      filter(args => args.type === eventType),
      map(args => args.data)
    );
  }
}
