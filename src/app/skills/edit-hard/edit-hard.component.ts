import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardskill } from 'src/app/models/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-edit-hard',
  templateUrl: './edit-hard.component.html',
  styleUrls: ['./edit-hard.component.css']
})
export class EditHardComponent implements OnInit {

  id?: number;
  hard!: Hardskill;

  constructor(
    private hardService: HardskillService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.aRouter.snapshot.params['id'];
    this.hardService.detailHardskill(this.id!).subscribe(
      data => {
        this.hard = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  onUpdate() {
    this.hardService.editHardskill(this.id!, this.hard).subscribe(
      data => {
        console.log("Editado")
        this.router.navigate(['/home']);
        Alerta.fire('Guardado', 'Cambios guardados correctamente', 'success')
      },
      err => {
        console.log(err);
      }
    )
  }

}
