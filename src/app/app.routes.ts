import { Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { VoitureListComponent } from './components/voiture-list/voiture-list.component';
import { VoitureFormComponent } from './components/voiture-form/voiture-form.component';
import { VoitureByClientComponentComponent } from './components/voiture-by-client-component/voiture-by-client-component.component';

export const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'voitures', component: VoitureListComponent },
  { path: 'voitures/new', component: VoitureFormComponent },
  { path: 'voitures/edit/:id', component: VoitureFormComponent },
  { path: 'voitures/client/:id', component: VoitureByClientComponentComponent }
];
