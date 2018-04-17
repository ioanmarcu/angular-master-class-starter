import {BrowserModule, Title} from '@angular/platform-browser';
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
import {ContactEditorComponent} from './contact-editor/contact-editor.component';
import {FormsModule} from '@angular/forms';
import {ContactDetailViewComponent} from './contact-detail-view/contact-detail-view.component';
import {TabComponent} from './tabs/tab/tab.component';
import {TabsComponent} from './tabs/tabs/tabs.component';
import {EventBusService} from './event-bus.service';


@NgModule({
  declarations: [ContactsAppComponent, ContactListComponent, ContactDetailComponent, ContactEditorComponent, ContactDetailViewComponent,
    TabComponent, TabsComponent],
  providers: [
    ContactService, EventBusService, Title,
    {provide: 'API_ENDPOINT', useValue: 'http://localhost:4201/api'}
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    HttpClientModule, FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
