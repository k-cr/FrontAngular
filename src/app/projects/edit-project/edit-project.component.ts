import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  id?: number;
  project!: Project;

  constructor(
    private projectService: ProjectService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.id = this.aRoute.snapshot.params['id'];
   this.projectService.detailProject(this.id!).subscribe(
     data => {
       this.project = data;
     },
     err => {
       console.log(err);
     }
   )
  }

  onUpdate(): void {
    this.projectService.editProject(this.id!, this.project!).subscribe(
      data => {
        console.log("Editado")
        this.router.navigate(['/home']);
        Alerta.fire('Guardado', 'Cambios guardados correctamente', 'success')
      },
      err => {
        console.log(err)
      }
    )
  }

}
