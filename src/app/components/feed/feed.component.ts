import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/HttpService";
import {Post} from "../../model/Post";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  posts: Post[];
  loading: boolean;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.loading = true;
    this.httpService.getPost().pipe(tap(() => this.loading = false)).subscribe(
      response => {
        this.posts = response;
      },
      error => {
        console.error(error);
      })
  }

  onAdd($event: Post) {
    this.posts.unshift($event);
  }
}
