import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from "@ngrx/effects";
import {FirebaseService} from "../services/firebase.service";
import {map, mergeMap} from "rxjs/operators";
import {
  ADD_POST,
  AddPost,
  LOAD_POST,
  LOAD_POSTS,
  LoadPost,
  PostAdded,
  PostLoaded,
  PostsLoaded
} from "../actions/post.actions";
import {Post} from "../model/Post";
import {fromPromise} from "rxjs/internal-compatibility";

@Injectable({providedIn: 'root'})
export class PostsEffect {

  constructor(private actions$: Actions, private firebaseService: FirebaseService) {
  }

  @Effect()
  posts$ = this.actions$.pipe(
    ofType(LOAD_POSTS),
    mergeMap(() => {
      return this.firebaseService.getPosts()
        .pipe(
          map(posts => new PostsLoaded(posts))
        )
    })
  );

  @Effect()
  addPost$ = this.actions$.pipe(
    ofType(ADD_POST),
    mergeMap((action) => {
      return fromPromise(this.firebaseService.savePost((action as AddPost).payload as Post)).pipe(
        map(() => new PostAdded((action as AddPost).payload as Post))
      )
    })
  );


  @Effect()
  loadPost$ = this.actions$.pipe(
    ofType(LOAD_POST),
    mergeMap((action) => {
      return this.firebaseService.getPostById((action as LoadPost).payload).pipe(
        map(response => new PostLoaded(response.data()))
      )
    })
  )
}
