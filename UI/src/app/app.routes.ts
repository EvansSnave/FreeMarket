import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sign-up', component: SignUpFormComponent },
];
