import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/service/person.service';
import Alerta from 'sweetalert2';

@Component({
  selector: 'app-editar-person',
  templateUrl: './editar-person.component.html',
  styleUrls: ['./editar-person.component.css']
})
export class EditarPersonComponent implements OnInit {

  id?: number;
  person!: Person;

  constructor(
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.personService.detailPerson(this.id!).subscribe(
    data => {
      this.person = data;
    },
    err => {
      console.log(err)
    }
  )
  }

  onUpdate() {
    this.personService.editPerson(this.id!, this.person!).subscribe(
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
