import {Actions, Effect, ofType} from "@ngrx/effects";
import {FirebaseService} from "../services/firebase.service";
import {LOAD_USER, LoadUser, UserLoaded} from "../actions/user.actions";
import {filter, map, mergeMap} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/auth";
import {of} from "rxjs";
import {Injectable} from "@angular/core";
import {User} from "../model/User";


@Injectable({providedIn: "root"})
export class UserEffects {

  constructor(private actions$: Actions, private firebaseService: FirebaseService, private angularFireAuth: AngularFireAuth) {

  }

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(LOAD_USER),
    mergeMap((action: LoadUser) => {
      return of(this.angularFireAuth.auth.currentUser).pipe(
        filter(response => response != null),
        map(user => {
          return new UserLoaded({
            username: user.email,
            lastName: user.displayName
          } as User)
        }))
    })
  )
}
