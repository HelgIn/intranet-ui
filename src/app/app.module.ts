import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './components/login/login.component';
import {FeedComponent} from './components/feed/feed.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from './components/register/register.component';
import {CreatePostComponent} from './components/create-post/create-post.component';
import {UserComponent} from './components/user/user.component';
import {AuthGuard} from "./guards/auth.guard";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {LoadingComponent} from './components/loading/loading.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/feed'},
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user-details', component: UserDetailsComponent, canActivate: [AuthGuard]},
  { path: 'post', component: PostDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedComponent,
    RegisterComponent,
    CreatePostComponent,
    UserComponent,
    UserDetailsComponent,
    PostDetailComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
