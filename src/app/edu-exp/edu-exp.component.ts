import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../models/education';
import { Experience } from '../models/experience';
import { EducationService } from '../service/education.service';
import { ExperienceService } from '../service/experience.service';
import { TokenService } from '../service/token.service';

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
  isAdmin = false;

  constructor(private expService: ExperienceService,
    private eduService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listExperiences();
    this.listEducation();
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
    this.expService.deleteExperience(id).subscribe(
      data => {
        console.log(data);
      });
      this.listExperiences();
  }

  // Educación

  deleteEdu(id: number) {
    this.eduService.deleteEducation(id).subscribe(data => {
      console.log(data);
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

}
