import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Hardskill } from '../models/hardskill';
import { Softskill } from '../models/softskill';
import { HardskillService } from '../service/hardskill.service';
import { SoftskillService } from '../service/softskill.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hard?: Hardskill;
  softskills: Softskill[] = [];
  hardskills: Hardskill[] = [];
  roles?: string[];
  isAdmin = false;

  constructor(
    private softService: SoftskillService,
    private hardService: HardskillService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.listSoftskill();
    this.listHardskill();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if(role === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  listSoftskill(): void {
    this.softService.getSoftskill().subscribe(
      data => {
        this.softskills = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  listHardskill(): void {
    this.hardService.getHardskill().subscribe(
      data => {
        this.hardskills = data;
      },
      err => {
        console.log(err);
      }
    )
  }


  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  bufferValue = 75;

  get style(){
    return 'width' + this.hard?.level + '%';
  }

}
