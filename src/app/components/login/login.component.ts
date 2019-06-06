import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  error: string;

  constructor(public authService: AuthService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/feed';
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }

  async onLogin() {
    try {
      await this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
      await this.router.navigate([this.returnUrl]);
    } catch (e) {
      console.error(e);
      this.error = e
    }
  }
}
