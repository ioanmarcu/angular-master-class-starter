import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactsMaterialModule} from './contacts-material.module';

import {ContactsAppComponent} from './app.component';
import {ContactService} from './contact.service';
import {ContactListComponent} from './contact-list/contact-list.component';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ContactsAppComponent, ContactListComponent, ContactDetailComponent ],
  providers: [
    ContactService,
    { provide: 'API_ENDPOINT', useValue:  'http://localhost:4201/api' }
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
