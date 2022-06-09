import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Hardskill } from '../models/hardskill';
import { Softskill } from '../models/softskill';
import { HardskillService } from '../service/hardskill.service';
import { SoftskillService } from '../service/softskill.service';
import { TokenService } from '../service/token.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hard?: Hardskill;
  softskills: Softskill[] = [];
  hardskills: Hardskill[] = [];

  constructor(
    private softService: SoftskillService,
    private hardService: HardskillService,
  ) { }

  ngOnInit(): void {
    this.listSoftskill();
    this.listHardskill();
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

  deleteHardskill(id: number) {
    Alerta.fire({
      title: '¿Seguro que querés eliminar este elemento?',
      text: 'Los elementos eliminados no pueden recuperarse',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, no quiero eliminar',
    }).then((result) => {
      if(result.value) {
        this.hardService.deleteHardskill(id).subscribe(
          data => {
          Alerta.fire('Removido', 'Elemento removido con éxito. Recarga la página', 'success')
          console.log(data);
          });
          this.listHardskill();
      } else if (result.dismiss === Alerta.DismissReason.cancel) {
        Alerta.fire('Cancelado', 'Operación cancelada', 'error')
      }
    })
  }

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  bufferValue = 75;

  get style(){
    return 'width' + this.hard?.level + '%';
  }

}
