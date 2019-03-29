import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/User";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  constructor(private http: HttpClient, private router: Router) {

  }

  login(credentials) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('/api/login', {headers: headers}).subscribe(
      response => {
        console.log(response);
        this.authenticated = response['authenticated'];
        localStorage.setItem('currentUser', JSON.stringify(response['name']));
        this.router.navigate(["/feed"]);
      },
      error => {
        console.error(error)
      });
  }

  logout() {

  }

  register(user: User) {
    this.http.post('/api/register', user).subscribe(response => {

      console.log(response);
    });

  }
}
