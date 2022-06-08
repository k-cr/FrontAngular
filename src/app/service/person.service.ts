import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personURL = 'https://portfoliocristianramos.herokuapp.com/api/person/';

  constructor(private httpClient: HttpClient) { }

  public getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.personURL + 'all');
  }

  public addPersons(person: Person): Observable<any>{
    return this.httpClient.post<any>(this.personURL + 'new', person);
  }

  public editPerson(id: number, person: Person): Observable<any>{
    return this.httpClient.put<any>(this.personURL + `edit/${id}`, person);
  }
  
  public detailPerson(id: number): Observable<Person>{
    return this.httpClient.get<Person>(this.personURL + `detail/${id}`);
  }

  public deletePerson(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.personURL + `delete/${id}`);
  }
}
