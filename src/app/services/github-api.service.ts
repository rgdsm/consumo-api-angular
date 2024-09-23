import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { githubData } from '../models/githubData';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private urlGit: string = 'https://api.github.com/users/'


  constructor(private http: HttpClient) { }

  getData(dataUser: string): Observable<githubData[]>{
  return this.http.get<githubData[]>(`${this.urlGit}${dataUser}/repos`)

  }

}
