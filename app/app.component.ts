import {Component} from "@angular/core";

@Component({
   selector: 'my-app',
   //directives:[CoursesComponent, AuthorsComponent],
   template:`<div class="container-fluid">
                  <h1>My First Angular App</h1><courses></courses>
                  <authors></authors>
            </div>
            `
})

export class AppComponent {

}