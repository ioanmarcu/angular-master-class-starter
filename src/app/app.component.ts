import {Component, OnInit} from '@angular/core';
import {EventBusService} from './event-bus.service';
import {EventType} from './event-bus';


@Component({
  selector: 'trm-contacts-app',
  template: `
    <mat-toolbar color="primary">{{title}}</mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {
  title = 'Contacts';
  constructor(private eventBus: EventBusService) {}

  ngOnInit() {
    this.eventBus.observe(EventType.APP_TITILE_CHANGE)
      .subscribe(title => this.title = title);
  }
}
