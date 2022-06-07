import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../service/project.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  roles?: string[];
  isAdmin = false;

  constructor(private ProjectService: ProjectService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listProject();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if(role === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  listProject(): void {
    this.ProjectService.getProjects().subscribe(
      data => {
        this.projects = data;
      },
      err => {
        console.log(err);
      }
    )
  }
}
