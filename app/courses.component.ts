import {Component, View} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
   selector: 'courses',
   template:`
   <div class="container-fluid">
                <h2> {{title}}</h2>
                <input type="text" autoGrow />
                <ul>
                    <li *ngFor="#course of courses">{{course}}</li>
                </ul>
   </div>
            `,
    providers:[CourseService],
    directives:[AutoGrowDirective]
    
})

export class CoursesComponent{
    courses;
    title:string="The title of the courses page";

    constructor(courseService:CourseService){
        this.courses=courseService.getCourses();
    }
}
