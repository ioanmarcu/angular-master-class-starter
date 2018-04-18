import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactEditorComponent} from './contact-editor/contact-editor.component';
import {ContactDetailViewComponent} from './contact-detail-view/contact-detail-view.component';
import {ContactCreatorComponent} from './contact-creator/contact-creator.component';

export const APP_ROUTES = [
  {path: '', component: ContactListComponent},
  {path: 'contact/new', component: ContactCreatorComponent},
  {path: 'contact/:id/edit', component: ContactEditorComponent},
  {path: 'contact/:id', component: ContactDetailViewComponent},
  {
    path: '**',
    redirectTo: '/'
  },
];
