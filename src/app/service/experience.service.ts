import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  expURL = 'https://portfoliocristianramos.herokuapp.com/api/experience/'

  constructor(private http: HttpClient) { }

  public getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.expURL + 'all');
  }

  public addExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(this.expURL + 'new', experience);
  }

  public editExperience(id: number, experience: Experience): Observable<any>{
    return this.http.put<any>(this.expURL + `edit/${id}`, experience);
  }

  public deleteExperience(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`);
  }

  public detailExperience(id: number): Observable<Experience>{
    return this.http.get<Experience>(this.expURL + `detail/${id}`);
  }
}
