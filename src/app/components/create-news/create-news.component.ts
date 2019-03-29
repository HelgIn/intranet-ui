import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../services/HttpService";
import {News} from "../../model/News";

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.sass']
})
export class CreateNewsComponent implements OnInit {

  isCollapsed: boolean = true;

  addNewsForm: FormGroup;

  @Output()
  onAdd = new EventEmitter<News>();

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.addNewsForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.httpService.addNews(this.addNewsForm.value).subscribe(
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
