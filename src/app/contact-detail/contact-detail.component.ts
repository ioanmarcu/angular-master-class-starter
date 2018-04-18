import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<void>();
  @Input() contact: Contact;
}
