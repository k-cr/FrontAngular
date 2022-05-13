import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NewUser } from '../models/new-user';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login-user';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'https://portfoliocristianramos.herokuapp.com/api/auth'
  constructor(private httpClient: HttpClient) { }

  public newUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'new', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUser);
  }
}
