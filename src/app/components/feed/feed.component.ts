import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/HttpService";
import {Post} from "../../model/Post";
import {FirebaseService} from "../../services/firebase.service";
import {AppState} from "../../app.state";
import {Store} from '@ngrx/store';
import {LoadPosts} from "../../actions/post.actions";
import {Observable} from "rxjs";


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {
  posts$: Observable<any>;
  loading: boolean;

  constructor(private httpService: HttpService, private firebaseService: FirebaseService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadPosts());
    this.posts$ = this.store.select(state => state.postState.posts);
  }

  onAdd($event: Post) {
    // this.posts.unshift($event);
  }
}
