import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../model/Post";
import {HttpService} from "../../services/HttpService";
import {FirebaseService} from "../../services/firebase.service";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {LoadPost} from "../../actions/post.actions";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  post$: Observable<Post>;
  loading: boolean;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private firebaseService: FirebaseService, private store: Store<AppState>) {
  }

  ngOnInit() {
    let id = this.route.snapshot.queryParams['id'];
    this.store.dispatch(new LoadPost(id));
    this.post$ = this.store.select(state => state.postState.post)
  }

}
