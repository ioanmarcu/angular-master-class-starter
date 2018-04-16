import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../models/contact';

@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Contact>;
  constructor(private contactService: ContactService) {
    contactService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }

  ngOnInit() {
  }

  trackByContacts(index: number, contact: Contact): number { return contact.id; }

}
