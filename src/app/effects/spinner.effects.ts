import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {LOAD_POST, LOAD_POSTS, POST_LOADED, POSTS_LOADED} from "../actions/post.actions";
import {map} from "rxjs/operators";
import {HideSpinner, ShowSpinner} from "../actions/spinner.actions";

@Injectable({
  providedIn: "root"
})
export class SpinnerEffects {

  @Effect()
  showSpinner$ = this.actions$.pipe(
    ofType(LOAD_POSTS, LOAD_POST),
    map(() => new ShowSpinner())
  );

  @Effect()
  hideSpinner$ = this.actions$.pipe(
    ofType(POSTS_LOADED, POST_LOADED),
    map(() => new HideSpinner())
  );

  constructor(private actions$: Actions) {
  }
}
