import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3003/users"

  constructor(private http: HttpClient) {

  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user)
  }

  listUser():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl)
  }

  
}
