import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../models/education';
import { Experience } from '../models/experience';
import { EducationService } from '../service/education.service';
import { ExperienceService } from '../service/experience.service';
import { TokenService } from '../service/token.service';
import Alerta from 'sweetalert2';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-edu-exp',
  templateUrl: './edu-exp.component.html',
  styleUrls: ['./edu-exp.component.css']
})
export class EduExpComponent implements OnInit {


  // Educación

  expList: any;
  eduList: any;

  experiences: Experience[] = [];
  educations: Education[] = [];

  roles?: string[];
  isAdmin?: boolean

  constructor(private expService: ExperienceService,
    private eduService: EducationService,
    private authService: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
    this.listExperiences();
    this.listEducation();
    this.isAdmin = this.authService.getAdmin()
  }

  // Listar

  listExperiences(): void {
    this.expService.getExperience().subscribe(
      data => {
        this.experiences = data;
      },
      err => {
        console.log(err);
      }
    )
  }
  
  // Borrar experiencia

  deleteExp(id: number) {
    Alerta.fire({
      title: '¿Seguro que querés eliminar este elemento?',
      text: 'Los elementos eliminados no pueden recuperarse',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, no quiero eliminar',
    }).then((result) => {
      if(result.value) {
        this.expService.deleteExperience(id).subscribe(
          data => {
          Alerta.fire('Removido', 'Elemento removido con éxito. Recarga la página', 'success')
          console.log(data);
          });
          this.listExperiences();
      } else if (result.dismiss === Alerta.DismissReason.cancel) {
        Alerta.fire('Cancelado', 'Operación cancelada', 'error')
      }
    })
  }

  // Educación

  deleteEdu(id: number) {
    Alerta.fire({
      title: '¿Seguro que querés eliminar este elemento?',
      text: 'Los elementos eliminados no pueden recuperarse',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, no quiero eliminar',
    }).then((result) => {
      if(result.value) {
        this.eduService.deleteEducation(id).subscribe(
          data => {
          Alerta.fire('Removido', 'Elemento removido con éxito. Recarga la página', 'success')
          console.log(data);
          });
          this.listEducation();
      } else if (result.dismiss === Alerta.DismissReason.cancel) {
        Alerta.fire('Cancelado', 'Operación cancelada', 'error')
      }
    });
  }

  listEducation(): void {
    this.eduService.getEducation().subscribe(
      data => {
        this.educations = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  editarEducacion(id: number) {
    this.router.navigate(['home/editarEducacion', id])
  }

  editarExperiencia(id: number) {
    this.router.navigate(['home/editarExperiencia', id])
  }

}
