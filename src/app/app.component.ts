import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'intranet-ui';

  constructor(private firebaseService: FirebaseService, private authService: AuthService) {
  }

}
