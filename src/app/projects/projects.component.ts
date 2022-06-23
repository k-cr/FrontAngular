import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../service/project.service';
import { TokenService } from '../service/token.service';
import Alerta from 'sweetalert2';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isAdmin?: boolean;
  projects: Project[] = [];

  constructor(private ProjectService: ProjectService,
    private tokenService: TokenService,
    private authService: AuthService,) { }

  ngOnInit(): void {
    this.listProject();
    this.isAdmin = this.authService.getAdmin()
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

  deleteProject(id: number) {
    Alerta.fire({
      title: '¿Seguro que querés eliminar este elemento?',
      text: 'Los elementos eliminados no pueden recuperarse',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, no quiero eliminar',
    }).then((result) => {
      if(result.value) {
        this.ProjectService.deleteProject(id).subscribe(
          data => {
          Alerta.fire('Removido', 'Elemento removido con éxito. Recarga la página', 'success')
          console.log(data);
          });
          this.listProject();
      } else if (result.dismiss === Alerta.DismissReason.cancel) {
        Alerta.fire('Cancelado', 'Operación cancelada', 'error')
      }
    })
  }
}
