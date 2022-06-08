import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  id?: number;
  experience!: Experience;

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detailExperience(this.id!).subscribe(
      data => {
        this.experience = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  onUpdate(): void {
    this.experienceService.editExperience(this.id!, this.experience!).subscribe(
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
