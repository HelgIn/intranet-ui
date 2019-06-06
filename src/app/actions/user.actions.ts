import {Action} from "@ngrx/store";
import {User} from "../model/User";

export const LOAD_USERS = '[USER] Load users';
export const USERS_LOADED = '[USER] Load users completed';
export const LOAD_USER = '[USER] Load user';
export const USER_LOADED = '[USER] Load user completed';
export const LOGGED_IN = '[USER] Logged in';

export class LoadUsers implements Action {
  type: string = LOAD_USERS;
}

export class UsersLoaded implements Action {
  type: string = USERS_LOADED;
}

export class LoadUser implements Action {
  type: string = LOAD_USER;
}

export class UserLoaded implements Action {
  type: string = USER_LOADED;

  constructor(public payload: User) {
    this.payload = payload;
  }
}

export class LoggedIn implements Action {
  type: string = LOGGED_IN;

  constructor(public payload: string) {
    this.payload = payload;
  }
}

export type UserAction = LoadUsers | UsersLoaded | LoadUser | UserLoaded | LoggedIn
