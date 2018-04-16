import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../models/contact';
import {ContactService} from '../contact.service';

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactService) {
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
      });
  }
}
