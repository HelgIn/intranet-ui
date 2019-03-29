import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {HttpService} from "./services/HttpService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'intranet-ui';

  constructor(private authService: AuthService, private httpService: HttpService, private router: Router) {
  }

  // ngOnInit() {
  //   if (!this.authService.authenticated) {
  //
  //     this.httpService.getUser().subscribe(
  //       response => {
  //         console.log(response);
  //         this.authService.authenticated = true;
  //       },
  //       error => {
  //         console.log(error);
  //         this.router.navigate(["/login"]);
  //       }
  //     )
  //   }
  //
  // }

}
