import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/Post";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  addPost(post) {
    return this.httpClient.post<Post>('/api/post/add', post);
  }

  getPost() {
    return this.httpClient.get<Post[]>('/api/post');
  }

  getNewsById(id: number) {
    return this.httpClient.get<Post>(`/api/post/${id}/`);
  }

  getUser() {
    return this.httpClient.get<User>('/api/user');
  }

  updateUser(user: User) {
    return this.httpClient.post('/api/user/update', user);
  }

  login() {
    return this.httpClient.get<User>('/api/login');
  }


}
