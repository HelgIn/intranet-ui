import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../services/HttpService";
import {User} from "../../model/User";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {LoadUser} from "../../actions/user.actions";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {

  userDetailsForm: FormGroup;
  user: User;
  user$: Observable<User>;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private httpService: HttpService, private store: Store<AppState>) {
  }

  ngOnInit() {

    this.user$ = this.store.select(state => state['user']);

    this.user$.pipe().subscribe(response => {
      console.log('user ', response);
      this.store.dispatch(new LoadUser())
    });


    this.userDetailsForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.email]
    });


    // this.httpService.getUser().subscribe(
    //   response => {
    //     this.user = response;
    //     this.userDetailsForm.controls.username.setValue(this.user.username);
    //     this.userDetailsForm.controls.firstName.setValue(this.user.firstName);
    //     this.userDetailsForm.controls.lastName.setValue(this.user.lastName);
    //     this.userDetailsForm.controls.email.setValue(this.user.email);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );


  }

  onSubmit() {
    // this.httpService.updateUser(this.userDetailsForm.value).subscribe(
    //   response => {
    //
    //   },
    //   error => {
    //     console.error(error);
    //   });
  }
}
