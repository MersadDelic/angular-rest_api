import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {User} from "../models/user";


const httpOptions = {
  header: new HttpHeaders( {
    'Authorization': `Bearer d2008ca73e7fcd566ccb46f49cf10ffb62271a3474f8e51197b89eddac4a0684`,
    'Content-Type': 'application/json' ,
    'Accept' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private USER_API = 'https://gorest.co.in/public-api'

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_API + `/users`)
      .pipe(
        map((response) => response),
        catchError((err) => throwError(err))
      );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.USER_API + `/users`, {user, httpOptions});
  }
}
