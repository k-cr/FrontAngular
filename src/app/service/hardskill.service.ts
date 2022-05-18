import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardskill } from '../models/hardskill';

@Injectable({
  providedIn: 'root'
})
export class HardskillService {

  hardURL = 'https://portfoliocristianramos.herokuapp.com/api/hardskill/' 

  constructor(private http: HttpClient) { }

  public getHardskill(): Observable<Hardskill[]> {
    return this.http.get<Hardskill[]>(this.hardURL + 'all');
  }

  public addHardskill(Hardskill:Hardskill): Observable<Hardskill>{
    return this.http.post<Hardskill>(this.hardURL + 'new', Hardskill);
  }

  public editHardskill(id: number, Hardskill: Hardskill): Observable<any>{
    return this.http.put<any>(this.hardURL + `edit/${id}`, Hardskill);
  }

  public deleteHardskill(id: number): Observable<any>{
    return this.http.delete<any>(this.hardURL + `delete/${id}`);
  }
}

