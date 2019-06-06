import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import {LoggedIn} from "../actions/user.actions";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;
  username: string;

  constructor(private http: HttpClient, private router: Router, public  angularFireAuth: AngularFireAuth, private store: Store<AppState>) {
    this.angularFireAuth.authState.subscribe(response => {
      console.log(response);
      if (response) {
        localStorage.setItem('user', response.providerData[0].email);

        this.store.dispatch(new LoggedIn(response.providerData[0].email));


        this.authenticated = true;
        this.username = response.providerData[0].email;
      } else {
        localStorage.removeItem('user');
        this.authenticated = false;
        this.username = null;
      }
    });
  }

  login(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/login']);

  }

  register(user: User) {
    this.http.post('/api/register', user).subscribe(response => {
      console.log(response);
    });

  }
}
