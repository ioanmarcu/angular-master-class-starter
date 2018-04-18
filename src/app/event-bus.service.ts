import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {filter, map} from 'rxjs/operators';
import {EventBusArgs, EventType} from './event-bus';

@Injectable()
export class EventBusService {
  messages$ = new Subject<EventBusArgs>();

  constructor() {
  }

  emit(eventType: EventType, data: any) {
    this.messages$.next({type: eventType, data: data});
  }

  observe(eventType: EventType) {
    return this.messages$.pipe(
      filter(args => args.type === eventType),
      map(args => args.data)
    );
  }
}
