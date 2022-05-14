import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [/*
  { path: '', component: PersonComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
