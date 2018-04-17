import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

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
    this.contacts$ = this.contactService.getContacts();
    this.terms$.pipe(
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe(term => this.search(term));

  }

  trackByContacts(index: number, contact: Contact): number {
    return contact.id;
  }

  search(term: string) {
    this.contacts$ = this.contactService.search(term);
  }
}
