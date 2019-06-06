import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../services/HttpService";
import {Post} from "../../model/Post";
import {FirebaseService} from "../../services/firebase.service";
import {AuthService} from "../../services/auth.service";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {AddPost} from "../../actions/post.actions";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass']
})
export class CreatePostComponent implements OnInit {

  isCollapsed: boolean = true;

  addNewsForm: FormGroup;

  @Output()
  onAdd = new EventEmitter<Post>();

  constructor(private httpService: HttpService,
              private formBuilder: FormBuilder,
              private firebaseService: FirebaseService,
              private authService: AuthService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.addNewsForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {

    this.store.dispatch(new AddPost({
      ...this.addNewsForm.value,
      date: new Date().getTime(),
      user: this.authService.username
    } as Post));
  }

}
