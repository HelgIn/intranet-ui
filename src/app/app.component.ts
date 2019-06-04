import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {FirebaseService} from "./services/firebase.service";
import {map, switchMap} from "rxjs/operators";
import {from} from "rxjs";
import {User} from "./model/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'intranet-ui';

  constructor(private firebaseService: FirebaseService, private authService: AuthService) {
    const users = firebaseService.getUsers();

    users.pipe(
      switchMap(data => from(data)),
      map(dto => {
        return {
          username: dto.payload.doc.data()
        } as User;
      })
    ).subscribe(console.log);
  }

}
