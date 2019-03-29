import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/HttpService";
import {User} from "../../model/User";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private httpService: HttpService, private authService: AuthService) {
  }

  ngOnInit() {
    this.httpService.getUser().subscribe(
      response => {
        this.user = response;
        this.authService.authenticated = true;
      },
      error => {
        console.log(error);
      }
    )
  }

  getAvatarData() {
    return this.user.username.charAt(0).toUpperCase()
  }

}
