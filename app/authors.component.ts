import {Component, View} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector:'authors',
    providers:[AuthorService],
})

@View({
    template:`<div class="container-fluid"> 
                <h2>
                   {{title}}
                </h2> 
                <ul>
                    <li *ngFor="#author of authors"> {{author}}</li>
                </ul>
              </div>
              `
})


export class AuthorsComponent{
    authors;
    title:"The title of the Authors Page"
    constructor(authorsService:AuthorService){
        this.authors= authorsService.getAuthors();
    }
}