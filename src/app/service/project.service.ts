import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectURL = 'https://portfoliocristianramos.herokuapp.com/api/projects/';

  constructor(private httpClient: HttpClient) { }
  
  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectURL + 'all');
  }

  public addProject(project: Project): Observable<any>{
    return this.httpClient.post<any>(this.projectURL + 'new', project)
  }

  public editProject(id: number, project: Project): Observable<any>{
    return this.httpClient.put<any>(this.projectURL + `edit/${id}`, project);
  }

  public deleteProject(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.projectURL + `delete/${id}`);
  }
}
