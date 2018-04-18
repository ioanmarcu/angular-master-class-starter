import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {Contact} from './models/contact';
import {Observable} from 'rxjs/Observable';
import {API_ENDPOINT} from './app.tokens';

interface ContactResponse {
  item: Contact;
}

interface ContactsResponse {
  items: Contact[];
}

@Injectable()
export class ContactService {
  constructor(private http: HttpClient, @Inject(API_ENDPOINT) private apiEndpoint) {
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.apiEndpoint}/contacts/`)
      .pipe(map((data) => data.items));
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.apiEndpoint}/contacts/${id}`)
      .pipe(map((data) => data.item));
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<ContactResponse>(`${this.apiEndpoint}/contacts/${contact.id}`, contact).pipe(map((data) => data.item));
  }

  searchRaw(term: string): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.apiEndpoint}/search?text=${term}`)
      .pipe(map((data) => data.items));
  }

  search(terms: Observable<string>, debouncesMs = 400): Observable<Array<Contact>> {
    return terms.pipe(
      debounceTime(debouncesMs), // O<string>
      distinctUntilChanged(), // O<string>
      switchMap(term => this.searchRaw(term))); // O<Array<Contact>>
  }

  addContact(contact: Contact) {
    return this.http.post<ContactResponse>(`${this.apiEndpoint}/contacts/`, contact);
  }

  isEmailAvailable(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiEndpoint}/check-email?email=${email}`);
  }
}
