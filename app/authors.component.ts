import {Component} from '@angular/core';
import {AuthorService} from './author.service';

@Component({
    selector:'authors',
    providers:[AuthorService],
    template: `<div class="container-fluid"> 
                <h2>
                   {{title}}
                </h2> 
                <ul>
                    <li *ngFor="let author of authors"> {{author}}</li>
                </ul>
              </div>
              `
})


export class AuthorsComponent{
    authors;
    title:string="The title of the Authors Page";
    constructor(authorsService:AuthorService){
        this.authors= authorsService.getAuthors();
    }
}