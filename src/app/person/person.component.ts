import { Component, OnInit } from '@angular/core';
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
  roles?: string[];
  isAdmin = false;

  constructor(
    private PersonService: PersonService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.listPerson();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if(role === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  listPerson(): void {
    this.PersonService.getAll().subscribe(
      data => {
        this.persons = data;
      },
      err => {
        console.log(err);
      }
    )
  }

}
