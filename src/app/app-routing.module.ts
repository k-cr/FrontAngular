import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
