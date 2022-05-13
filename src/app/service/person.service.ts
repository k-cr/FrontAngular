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

  public getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.personURL + 'all');
  }

  public add(person: Person): Observable<any>{
    return this.httpClient.post<any>(this.personURL + 'new', person);
  }

  public update(id: number, person: Person): Observable<any>{
    return this.httpClient.put<any>(this.personURL + `edit/${id}`, person);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.personURL + `delete/${id}`);
  }
}
