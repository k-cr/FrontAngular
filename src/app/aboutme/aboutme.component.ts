import { Component, OnInit } from '@angular/core';
import { Aboutme } from '../models/aboutme';
import { AboutmeService } from '../service/aboutme.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  abouts: Aboutme[] = [];
  roles?: string[];
  isAdmin = false;

  constructor(private AboutmeService: AboutmeService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listAbout();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if(role === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  listAbout(): void {
    this.AboutmeService.getAbout().subscribe(
      data => {
        this.abouts = data;
      },
      err => {
        console.log(err);
      }
    )
  }

}
