import {Action} from '@ngrx/store';
import {
  ADD_POST_COMPLETED,
  LOAD_POSTS,
  POST_ADDED,
  POST_LOADED,
  PostAdded,
  PostLoaded,
  POSTS_LOADED,
  PostsLoaded
} from "../actions/post.actions";
import {PostState} from "../app.state";

export function postReducer(state: PostState = {} as PostState, action: Action) {
  switch (action.type) {
    case LOAD_POSTS:
      console.log(action);
      return state;
    case POST_ADDED:
      return {
        ...state,
        posts: [(action as PostAdded).payload, ...state.posts]
      };
    case ADD_POST_COMPLETED:
      return {
        ...state,
        posts: (action as PostsLoaded).payload
      };
    case POSTS_LOADED:
      return {
        ...state,
        posts: (action as PostsLoaded).payload
      };
    case POST_LOADED:
      return {
        ...state,
        post: (action as PostLoaded).payload
      };
    default:
      return state;
  }
}
