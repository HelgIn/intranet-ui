import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/HttpService";
import {News} from "../../model/News";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  news: News[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getNews().subscribe(
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
