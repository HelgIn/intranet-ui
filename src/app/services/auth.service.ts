import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/User";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;
  username: string;

  constructor(private http: HttpClient, private router: Router) {

  }

  login(credentials?): Observable<boolean> {
    if (this.authenticated) return of(true);
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    return this.http.get<boolean>('/api/login', {headers: headers}).pipe(
      tap(credentials => {
        if (credentials && credentials['authenticated']) {
          this.authenticated = credentials['authenticated'];
          this.username = credentials['name'];
        }
      }),
      map(credentials => credentials && credentials['authenticated'])
    );
  }

  logout() {

  }

  register(user: User) {
    this.http.post('/api/register', user).subscribe(response => {

      console.log(response);
    });

  }
}
