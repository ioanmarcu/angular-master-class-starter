import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
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
  API_ENDPOINT = 'http://localhost:4201/api';

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Array<Contact>> {
    const url = this.API_ENDPOINT + '/contacts';
    return this.http.get<ContactsResponse>(`${this.API_ENDPOINT}/contacts/`)
      .pipe(map((data) => data.items));
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.API_ENDPOINT}/contacts/${id}`)
      .pipe(map((data) => data.item));
  }
}
