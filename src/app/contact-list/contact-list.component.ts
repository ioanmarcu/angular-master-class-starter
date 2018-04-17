import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts$: Observable<Array<Contact>>;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts$ = this.contactService.getContacts();
  }

  trackByContacts(index: number, contact: Contact): number {
    return contact.id;
  }

  search(term: string) {
    this.contacts$ = this.contactService.search(term);
  }
}
