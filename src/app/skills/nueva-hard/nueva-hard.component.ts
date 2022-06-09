import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardskill } from 'src/app/models/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';
import Alerta from 'sweetalert2';


@Component({
  selector: 'app-nueva-hard',
  templateUrl: './nueva-hard.component.html',
  styleUrls: ['./nueva-hard.component.css']
})
export class NuevaHardComponent implements OnInit {

  level?: number;
  name = '';

  constructor(
    private router: Router,
    private hardskillService: HardskillService,
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hardskill = new Hardskill(this.name, this.level!)
    this.hardskillService.addHardskill(hardskill).subscribe(
      data => {console.log("Agregado");
      Alerta.fire('Agregago', 'Agregado correctamente', 'success')
      this.router.navigate(['/home'])}

    )
  }

}
