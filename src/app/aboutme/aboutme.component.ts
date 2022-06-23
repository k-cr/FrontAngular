import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aboutme } from '../models/aboutme';
import { AboutmeService } from '../service/aboutme.service';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  abouts: Aboutme[] = [];
  roles?: string[];
  isAdmin?: boolean;

  constructor(private AboutmeService: AboutmeService,
    private authService: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
    this.listAbout();
    this.isAdmin = this.authService.getAdmin()
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

  editarAbout(id: number) {
    this.router.navigate(['home/editar', id])
  }

}
