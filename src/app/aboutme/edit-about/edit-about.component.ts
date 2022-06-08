import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aboutme } from 'src/app/models/aboutme';
import { AboutmeService } from 'src/app/service/aboutme.service';
import Alerta from 'sweetalert2';


@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  id?: number;
  about!: Aboutme;

  constructor(
    private About: AboutmeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.About.detailAbout(1).subscribe(
    data => {
      this.about = data;
    },
    err => {
      console.log(err)
    }
  )}

  onUpdate() {
    this.About.editAbout(this.about!).subscribe(
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
