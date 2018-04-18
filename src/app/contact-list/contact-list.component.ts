import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {merge} from 'rxjs/observable/merge';
import {EventBusService} from '../event-bus.service';
import {Title} from '@angular/platform-browser';
import {EventType} from '../event-bus';

@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;
  terms$ = new Subject<string>();

  constructor(private contactService: ContactService, private eventBusService: EventBusService, private title: Title) {
  }

  ngOnInit() {
    const search$ = this.contactService.search(this.terms$);
    const initialData$ = this.contactService.getContacts();
    this.contacts$ = merge(search$, initialData$);
    this.eventBusService.emit(EventType.APP_TITILE_CHANGE, 'Contacts');
    this.title.setTitle('Contacts');
  }

  trackByContacts(index: number, contact: Contact): number {
    return contact.id;
  }
}
