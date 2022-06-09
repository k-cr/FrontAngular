import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './aboutme/edit-about/edit-about.component';
import { LoginComponent } from './auth/login.component';
import { EditEduComponent } from './edu-exp/edit-edu/edit-edu.component';
import { EditExpComponent } from './edu-exp/edit-exp/edit-exp.component';
import { NewEduComponent } from './edu-exp/new-edu/new-edu.component';
import { NewExpComponent } from './edu-exp/new-exp/new-exp.component';
import { IndexComponent } from './index/index.component';
import { EditarPersonComponent } from './person/editar-person/editar-person.component';
import { PersonComponent } from './person/person.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { EditHardComponent } from './skills/edit-hard/edit-hard.component';
import { EditSoftComponent } from './skills/edit-soft/edit-soft.component';
import { NuevaHardComponent } from './skills/nueva-hard/nueva-hard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: IndexComponent},

  { path: 'home/editarPerson/:id', component: EditarPersonComponent},

  { path: 'home/editarSobreMi/:id', component: EditAboutComponent},

  { path: 'home/nuevaEducation', component: NewEduComponent},
  { path: 'home/editarEducacion/:id', component: EditEduComponent},

  { path: 'home/nuevaExperiencia', component: NewExpComponent},
  { path: 'home/editarExperiencia/:id', component: EditExpComponent},

  { path: 'home/editarSoftskill/:id', component: EditSoftComponent},
  { path: 'home/editarHardskill/:id', component: EditHardComponent},
  { path: 'home/nuevaHardskill', component: NuevaHardComponent},
  
  { path: 'home/nuevoProyecto', component: NewProjectComponent},
  { path: 'home/editarProyecto/:id', component: EditProjectComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
