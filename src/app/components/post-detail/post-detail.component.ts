import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../model/Post";
import {HttpService} from "../../services/HttpService";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  loading: boolean;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    let id = this.route.snapshot.queryParams['id'];
    this.httpService.getNewsById(id).pipe(tap(() => this.loading = false)).subscribe(
      response => {
        this.post = response;
      },
      error => {
        console.error(error);
      })
  }

}
