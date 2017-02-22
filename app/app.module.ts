import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import {AuthorsComponent} from './authors.component';
import {CoursesComponent} from './courses.component';
import {AutoGrowDirective} from './auto-grow.directive';
import {AutoHighlightDirective} from './auto-highlight.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective, AutoHighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }