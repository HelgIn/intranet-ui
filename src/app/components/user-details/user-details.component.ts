import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../services/HttpService";
import {User} from "../../model/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {

  userDetailsForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) {
  }

  ngOnInit() {
    this.userDetailsForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.email]
    });


    this.httpService.getUser().subscribe(
      response => {
        this.user = response;
        this.userDetailsForm.controls.username.setValue(this.user.username)
        this.userDetailsForm.controls.firstName.setValue(this.user.firstName)
        this.userDetailsForm.controls.lastName.setValue(this.user.lastName)
        this.userDetailsForm.controls.email.setValue(this.user.email)
      },
      error => {
        console.error(error);
      }
    );


  }

  onSubmit() {
    this.httpService.updateUser(this.userDetailsForm.value).subscribe(
      response => {

      },
      error => {
        console.error(error);
      });
  }
}
