import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {

  startDate = '';
  finishDate = '';
  ocupation = '';
  otherInformation = '';

  constructor(
    private experience: ExperienceService, 
    private router: Router,
  ) {

  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experience = new Experience(this.startDate, this.finishDate, this.ocupation, this.otherInformation)
    this.experience.addExperience(experience).subscribe(
      data => {console.log('Agregado')
      Alerta.fire('Agregago', 'Agregado correctamente', 'success')
      this.router.navigate(['/home'])}
    )
  }

}
