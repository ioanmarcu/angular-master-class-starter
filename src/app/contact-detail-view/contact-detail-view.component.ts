import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../models/contact';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';
import {ContactService} from '../contact.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'trm-contact-detail-view',
  templateUrl: './contact-detail-view.component.html',
  styleUrls: ['./contact-detail-view.component.css']
})
export class ContactDetailViewComponent implements OnInit {
  contact: Observable<Contact>;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) {
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactService.getContact(id);
  }

  navigateToEditor(contact) {
    this.router.navigate([`/contact`, contact.id, 'edit']);
  }

  navigateToList() {
    this.router.navigate(['/']);
  }
}

