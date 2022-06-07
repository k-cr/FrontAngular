import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  eduURL = 'https://portfoliocristianramos.herokuapp.com/api/education/'

  constructor(private http: HttpClient) { }

  public getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.eduURL + 'all');
  }

  public addEducation(Education:Education): Observable<Education>{
    return this.http.post<Education>(this.eduURL + 'new', Education);
  }

  public editEducation(id: number, Education: Education): Observable<any>{
    return this.http.put<any>(this.eduURL + `edit/${id}`, Education);
  }

  public deleteEducation(id: number): Observable<any>{
    return this.http.delete<any>(this.eduURL + `delete/${id}`);
  }

  public detailEducation(id: number): Observable<Education> {
    return this.http.get<Education>(this.eduURL + `detail/${id}`);
  }
}
