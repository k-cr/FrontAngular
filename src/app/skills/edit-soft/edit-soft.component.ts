import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Softskill } from 'src/app/models/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-edit-soft',
  templateUrl: './edit-soft.component.html',
  styleUrls: ['./edit-soft.component.css']
})
export class EditSoftComponent implements OnInit {

  id?: number;
  soft!: Softskill;

  constructor(
    private softService: SoftskillService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.softService.detailSoftskill(this.id!).subscribe(
      data => {
        this.soft = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  onUpdate() {
    this.softService.editSoftskill(this.id!, this.soft).subscribe(
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
