import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/service/education.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {

  startDate = '';
  finishDate = '';
  degree = '';
  otherInformation = '';

  constructor(
    private education: EducationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const education = new Education(this.startDate, this.finishDate, this.degree, this.otherInformation)
    this.education.addEducation(education).subscribe(
      data => {console.log("Agregado");
      Alerta.fire('Agregago', 'Agregado correctamente', 'success')
      this.router.navigate(['/home'])}

    )
  }

}
