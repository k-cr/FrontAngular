import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/service/education.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  id?: number;
  education!: Education;

  constructor(
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.educationService.getById(this.id!).subscribe(
      data => {
        this.education = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  onUpdate(): void {
    this.educationService.editEducation(this.id!, this.education!).subscribe(
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
