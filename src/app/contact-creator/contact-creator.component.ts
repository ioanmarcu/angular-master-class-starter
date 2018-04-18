import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {EventBusService} from '../event-bus.service';
import {Contact} from '../models/contact';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validateEmail} from '../email-validator.directive';
import {checkEmailAvailability} from '../email-availability-validator.directive';

@Component({
  selector: 'trm-contact-creator',
  templateUrl: './contact-creator.component.html',
  styleUrls: ['./contact-creator.component.css']
})
export class ContactCreatorComponent implements OnInit {
  form: FormGroup;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', validateEmail, checkEmailAvailability(this.contactService)],
      phone: '',
      birthday: '',
      website: '',
      address: this.fb.group({
        zip: '',
        street: '',
        city: ''
      })

    });
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
