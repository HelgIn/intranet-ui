import {LOGGED_IN, LoggedIn, USER_LOADED, UserAction, USERS_LOADED} from "../actions/user.actions";
import {User} from "../model/User";


export interface UserState {
  user: User;
  username: string
}

export function userReducer(state: UserState = {user: null, username: null}, action: UserAction) {
  switch (action.type) {
    case USER_LOADED:
      return state;
    case USERS_LOADED:
      return state;
    case LOGGED_IN:
      return {
        ...state,
        username: (action as LoggedIn).payload
      };
    default:
      return state;
  }
}
