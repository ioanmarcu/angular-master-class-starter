import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../models/contact';
import {EventBusService} from '../event-bus.service';
import {Title} from '@angular/platform-browser';
import {EventType} from '../event-bus';

@Component({
  selector: 'trm-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {
  private contact: Contact = <Contact>{address: {}};

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private router: Router,
              private eventBusService: EventBusService, private title: Title) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.contactService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this.eventBusService.emit(EventType.APP_TITILE_CHANGE, 'Edit: ' + contact.name);
        this.title.setTitle(contact.name);
      });
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  goToDetails(contact: Contact) {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  save(contact: Contact) {
    this.contactService.updateContact(contact).subscribe(() => this.goToDetails(contact));
  }

}
