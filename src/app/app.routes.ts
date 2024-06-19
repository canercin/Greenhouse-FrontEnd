import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {AllusersComponent} from "./allusers/allusers.component";
import {MainComponent} from "./main/main.component";
import {AlldatasComponent} from "./alldatas/alldatas.component";

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'allusers', component: AllusersComponent },
  { path: 'alldatas', component: AlldatasComponent},
  { path: '', component: MainComponent}
];
