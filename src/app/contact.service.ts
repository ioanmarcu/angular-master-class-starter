import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, map} from 'rxjs/operators';
import {Contact} from './models/contact';
import {Observable} from 'rxjs/Observable';

interface ContactResponse {
  item: Contact;
}

interface ContactsResponse {
  items: Contact[];
}

@Injectable()
export class ContactService {
  constructor(private http: HttpClient, @Inject('API_ENDPOINT') private API_ENDPOINT)  {
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.API_ENDPOINT}/contacts/`)
      .pipe(map((data) => data.items));
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.API_ENDPOINT}/contacts/${id}`)
      .pipe(map((data) => data.item));
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<ContactResponse>(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact)  .pipe(map((data) => data.item));
  }
}
