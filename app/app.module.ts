import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AuthorsComponent } from './authors.component';
import { CoursesComponent } from './courses.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { AutoHighlightDirective } from './auto-highlight.directive';
import { CourseService } from './course.service';
import { AuthorService } from './author.service';
import { FavoriteComponent } from './favorite.component';
import { FavoriteHeartComponent } from './favoriteHeart.component';
import { voteComponent } from './vote.component';
import { TweetComponent } from './tweet.component';
import { TweetService } from './tweet.service';
import { GithubUsersService } from './github-users.service';
import { ZippyComponent } from './zippy.component';
import { UserFormComponent } from './user-details-form.component';
import { SignUpFormComponent } from './signup-form.component';
import { PasswordChangeComponent } from './password-change.component';
import { routing } from './app.routing';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { MessagesComponent } from './messages/messages.component';
import { NavbarComponent } from './navbar.component';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { PostsComponent } from './posts.component';
import { AddUserComponent } from './add-user.component';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';




@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
    HttpModule, JsonpModule, routing],
  declarations: [AppComponent,
    CoursesComponent, AuthorsComponent,
    AutoGrowDirective, AutoHighlightDirective,
    FavoriteComponent, FavoriteHeartComponent,
    voteComponent, TweetComponent, ZippyComponent,
    UserFormComponent, SignUpFormComponent, PasswordChangeComponent,
    PhotosComponent, MessagesComponent, HomeComponent, NotFoundComponent,
    NavbarComponent, UsersComponent, PostsComponent, AddUserComponent],
  providers: [CourseService, AuthorService, TweetService,
    GithubUsersService, UsersService,PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { };