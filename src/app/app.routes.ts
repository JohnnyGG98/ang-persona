import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { HomeComponent } from './components/home/home.component';
import { FormPersonComponent } from './components/form-person/form-person.component';
import { PersonComponent } from './components/person/person.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'persona', component: ListPersonComponent},
    { path: 'persona/ingresar', component: FormPersonComponent},
    { path: 'persona/:id', component: PersonComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
