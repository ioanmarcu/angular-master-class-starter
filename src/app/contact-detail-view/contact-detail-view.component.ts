import {Component, OnInit} from '@angular/core';
import {Contact} from '../models/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {Observable} from 'rxjs/Observable';
import {EventBusService} from '../event-bus.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'trm-contact-detail-view',
  templateUrl: './contact-detail-view.component.html',
  styleUrls: ['./contact-detail-view.component.css']
})
export class ContactDetailViewComponent implements OnInit {
  contact: Observable<Contact>;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router,
              private eventBusService: EventBusService, private title: Title) {
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactService.getContact(id);
    this.contact.subscribe(c => {
        this.eventBusService.emit('appTitleChange', c.name);
        this.title.setTitle(c.name);
      }
    );
  }

  navigateToEditor(contact) {
    this.router.navigate([`/contact`, contact.id, 'edit']);
  }

  navigateToList() {
    this.router.navigate(['/']);
  }
}

