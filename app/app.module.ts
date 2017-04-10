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
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, routing],
  declarations: [AppComponent,
                CoursesComponent, AuthorsComponent,
                AutoGrowDirective, AutoHighlightDirective,
                FavoriteComponent, FavoriteHeartComponent,
                voteComponent, TweetComponent, ZippyComponent,
                UserFormComponent, SignUpFormComponent, PasswordChangeComponent,
                PhotosComponent, MessagesComponent, HomeComponent, NotFoundComponent],
  providers: [CourseService, AuthorService, TweetService, GithubUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { };