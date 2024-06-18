import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {AllusersComponent} from "./allusers/allusers.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'allusers', component: AllusersComponent },
  { path: 'alldatas', component: AllusersComponent},
  { path: '', component: MainComponent}
];
