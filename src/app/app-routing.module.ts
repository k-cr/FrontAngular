import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { NewEduComponent } from './edu-exp/new-edu/new-edu.component';
import { IndexComponent } from './index/index.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: IndexComponent},
  { path: 'home/nuevaEducation', component: NewEduComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
