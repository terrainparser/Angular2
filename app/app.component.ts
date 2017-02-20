import {Component, View} from "angular2/core";
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
   selector: 'my-app'
})

@View({
  directives:[CoursesComponent, AuthorsComponent],
  template:`<div class="container-fluid">
                  <h1>My First Angular App</h1><courses></courses>
                  <authors></authors>
            </div>
            `
})

export class AppComponent {

}