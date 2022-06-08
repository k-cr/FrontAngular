import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../models/person';
import { PersonService } from '../service/person.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[] = [];

  constructor(
    private PersonService: PersonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listPerson();
  }

  listPerson(): void {
    this.PersonService.getPersons().subscribe(
      data => {
        this.persons = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  editarPerson(id: number) {
    this.router.navigate(['home/editarPerson', id])
  }

}
