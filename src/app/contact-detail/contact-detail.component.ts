import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../models/contact';
import {ContactService} from '../contact.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Observable<Contact>;

  constructor(private route: ActivatedRoute, private contactService: ContactService) {
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactService.getContact(id);
  }
}
