import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/HttpService";
import {News} from "../../model/News";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  news: News[];
  loading: boolean;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.loading = true;
    this.httpService.getNews().pipe(tap(() => this.loading = false)).subscribe(
      response => {
        console.log(response);
        this.news = response;
      },
      error => {
        console.error(error);
      })
  }

  onAdd($event: News) {
    console.log($event);
    this.news.unshift($event);
  }
}
