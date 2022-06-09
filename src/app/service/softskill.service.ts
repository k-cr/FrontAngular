import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Softskill } from '../models/softskill';

@Injectable({
  providedIn: 'root'
})
export class SoftskillService {

  softURL = 'https://portfoliocristianramos.herokuapp.com/api/softskill/'

  constructor(private http: HttpClient) { }

  public getSoftskill(): Observable<Softskill[]> {
    return this.http.get<Softskill[]>(this.softURL + 'all');
  }

  public addSoftskill(Softskill:Softskill): Observable<Softskill>{
    return this.http.post<Softskill>(this.softURL + 'new', Softskill);
  }

  public editSoftskill(id: number, Softskill: Softskill): Observable<any>{
    return this.http.put<any>(this.softURL + `edit/${id}`, Softskill);
  }

  public deleteSoftskill(id: number): Observable<any>{
    return this.http.delete<any>(this.softURL + `delete/${id}`);
  }

  public detailSoftskill(id: number): Observable<Softskill>{
    return this.http.get<Softskill>(this.softURL + `detail/${id}`);
  }
}
