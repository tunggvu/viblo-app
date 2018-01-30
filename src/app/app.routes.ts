import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from "./people-list/people-list.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";

const routes: Routes = [
  {
    path: 'people',
    component: PeopleListComponent,
  },
  {
    path: 'person/:id',
    component: PersonDetailsComponent
  },
  {
    path: '',
    redirectTo: '/people',
    pathMatch: 'full'
  },
];


export const appRouterModule = RouterModule.forRoot(routes);
