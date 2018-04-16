import { ContactListComponent } from './contact-list/contact-list.component';
import {ContactsAppComponent} from './app.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';

export const APP_ROUTES = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailComponent },
  { path: '**',
    redirectTo: '/'
  },
];
