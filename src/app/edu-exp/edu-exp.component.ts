import { Component, OnInit } from '@angular/core';
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

  experiences: Experience[] = [];
  educations: Education[] = [];

  roles?: string[];
  isAdmin = false;

  constructor(private expService: ExperienceService,
    private eduService: EducationService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
  }

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

}
