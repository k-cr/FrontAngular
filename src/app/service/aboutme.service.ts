import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aboutme } from '../models/aboutme';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  aboutURL = 'https://portfoliocristianramos.herokuapp.com/api/about/';

  constructor(private httpClient: HttpClient) { }

  public getAbout(): Observable<Aboutme[]>{
    return this.httpClient.get<Aboutme[]>(this.aboutURL + 'all');
  }

  public addAbout(about: Aboutme): Observable<any>{
    return this.httpClient.post<any>(this.aboutURL + 'new', about);
  }

  public editAbout(about: Aboutme): Observable<any>{
    return this.httpClient.put<any>(this.aboutURL + `edit/1`, about);
  }

  public deleteAbout(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.aboutURL + `delete/${id}`);
  }  
  
  public detailAbout(id: number): Observable<Aboutme>{
    return this.httpClient.get<Aboutme>(this.aboutURL + `detail/${id}`);
  }
}
