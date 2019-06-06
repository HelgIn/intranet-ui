import {Component} from '@angular/core';
import {HttpService} from "../../services/HttpService";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {

  constructor(private httpService: HttpService, private authService: AuthService) {
    console.log(this.authService.username);
  }


  getAvatarData() {
    if (this.authService.username) {
      return this.authService.username.charAt(0).toUpperCase()
    }
    return null;
  }
}
