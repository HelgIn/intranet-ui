import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  login(credentials) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('/api/login', {headers: headers}).subscribe(response => {
      if (response && response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    });
  }

  logout() {

  }
}
