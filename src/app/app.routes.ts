import { ContactListComponent } from './contact-list/contact-list.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactEditorComponent} from './contact-editor/contact-editor.component';

export const APP_ROUTES = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id/edit', component: ContactEditorComponent },
  { path: 'contact/:id', component: ContactDetailComponent },
  { path: '**',
    redirectTo: '/'
  },
];
