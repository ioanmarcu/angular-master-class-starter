import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {debounceTime, delay, distinctUntilChanged, switchMap, takeUntil} from 'rxjs/operators';
import {merge} from 'rxjs/observable/merge';

@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;
  terms$ = new Subject<string>();
  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    const search$ = this.terms$.pipe(
      debounceTime(100), // O<string>
      distinctUntilChanged(), // O<string>
      switchMap(term => this.contactService.search(term))); // O<Array<Contact>>
    const initialData$ = this.contactService.getContacts().pipe(delay(5000), takeUntil(this.terms$));
    this.contacts$ = merge(search$, initialData$);
  }

  trackByContacts(index: number, contact: Contact): number {
    return contact.id;
  }
}
