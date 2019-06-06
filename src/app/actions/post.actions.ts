import {Action} from '@ngrx/store';

export const LOAD_POSTS = '[POST] Load posts';
export const POSTS_LOADED = '[POST] Load posts completed';
export const ADD_POST = '[POST] Add post';
export const ADD_POST_COMPLETED = '[POST] Add post completed';
export const LOAD_POST = '[POST] Load post';
export const POST_LOADED = '[POST] Load post completed';
export const POST_ADDED = '[POST] Post added';


export class LoadPosts implements Action {
  type: string = LOAD_POSTS;
}

export class LoadPost implements Action {
  type: string = LOAD_POST;

  constructor(public payload: any) {
    this.payload = payload;
  }
}export class PostLoaded implements Action {
  type: string = POST_LOADED;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class AddPost implements Action {
  type: string = ADD_POST;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class PostAdded implements Action {
  type: string = POST_ADDED;

  constructor(public payload: any) {
    this.payload = payload;
  }
}

export class PostsLoaded implements Action {
  type: string = POSTS_LOADED;

  constructor(public payload: any) {
    this.payload = payload;
  }
}
