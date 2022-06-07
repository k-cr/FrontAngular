import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

// Módulos para el proyecto

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Módulos del proyecto

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonComponent } from './person/person.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EduExpComponent } from './edu-exp/edu-exp.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

// Módulos externos

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PersonInterceptorService } from './interceptors/person-interceptor.service';
import { NewEduComponent } from './edu-exp/new-edu/new-edu.component';
import { NewExpComponent } from './edu-exp/new-exp/new-exp.component';
import { EditExpComponent } from './edu-exp/edit-exp/edit-exp.component';
import { EditEduComponent } from './edu-exp/edit-edu/edit-edu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    NavbarComponent,
    PersonComponent,
    AboutmeComponent,
    EduExpComponent,
    SkillsComponent,
    ProjectsComponent,
    NewEduComponent,
    NewExpComponent,
    EditExpComponent,
    EditEduComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PersonInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
