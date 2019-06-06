import {Post} from "./model/Post";

export interface AppState {
  postState: PostState;
}

export interface PostState {
  posts?: Post[];
  post?: Post;
}
