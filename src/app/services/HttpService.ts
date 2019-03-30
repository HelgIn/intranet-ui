import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {News} from "../model/News";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  addNews(news) {
    return this.httpClient.post<News>('/api/news/add', news);
  }

  getNews() {
    return this.httpClient.get<News[]>('/api/news');
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

  getNewsById(id: number) {

    return this.httpClient.get<News>(`/api/news/${id}/`);

  }
}
