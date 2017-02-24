import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {AuthorsComponent} from './authors.component';
import {CoursesComponent} from './courses.component';
import {AutoGrowDirective} from './auto-grow.directive';
import {AutoHighlightDirective} from './auto-highlight.directive';
import {CourseService} from './course.service';
import {AuthorService} from './author.service';
import {FavoriteComponent} from './favorite.component';
import {FavoriteHeartComponent} from './favoriteHeart.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
                  CoursesComponent, AuthorsComponent, 
                  AutoGrowDirective, AutoHighlightDirective,
                  FavoriteComponent, FavoriteHeartComponent ],
  providers:    [ CourseService, AuthorService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }