import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../services/HttpService";
import {Post} from "../../model/Post";

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

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.addNewsForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.httpService.addPost(this.addNewsForm.value).subscribe(
      response => {
        console.log(response);
        this.onAdd.emit(response);
        this.addNewsForm.reset();
      },
      error => {
        console.error(error);
      })
  }

}
