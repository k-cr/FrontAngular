import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  name = '';
  description = ' ';
  url_image = ' ';
  url_liveDemo = ' ';
  url_sourceCode = ' ';

  constructor(
    private router: Router,
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
  }

  onCreate() {
    const project = new Project(this.name, this.description, this.url_image, this.url_liveDemo, this.url_sourceCode);
    this.projectService.addProject(project).subscribe(
      data => {
        console.log("Agregado");
        Alerta.fire('Agregago', 'Agregado correctamente', 'success')
        this.router.navigate(['/home'])
      }
    )
  }

}
