import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {EventBusService} from '../event-bus.service';
import {Contact} from '../models/contact';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'trm-contact-creator',
  templateUrl: './contact-creator.component.html',
  styleUrls: ['./contact-creator.component.css']
})
export class ContactCreatorComponent implements OnInit {


  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private router: Router,
              private eventBusService: EventBusService, private title: Title) {
  }

  ngOnInit() {
  }

  cancel() {
    this.goToDetails();
  }

  goToDetails() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  save(contact: Contact) {
    this.contactService.addContact(contact).subscribe(() => this.goToDetails());
  }
}
