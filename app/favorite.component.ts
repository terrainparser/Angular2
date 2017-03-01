import {Component, ElementRef, Renderer} from '@angular/core'

@Component({
    selector:'favorite',
    template:`<i class="glyphicon glyphicon-star-empty" (click)="onClick()"></i>`
    //`<i class="glyphicon" [class.glyphicon-star]="isFavorite"  [class.glyphicon-star-empty]="!isFavorite"  (click)="onClick()"></i>` 
})

export class FavoriteComponent{
    isFavorite:boolean =false;
    constructor(private el:ElementRef, private renderer:Renderer){
    }
    onClick(): void {
        this.isFavorite=!this.isFavorite;
        console.log(this.el.nativeElement.firstChild);

        if(this.isFavorite){
        this.el.nativeElement.firstChild.classList.remove('glyphicon-star-empty');
         this.el.nativeElement.firstChild.classList.add('glyphicon-star');
         
        }
        else{
            this.el.nativeElement.firstChild.classList.remove('glyphicon-star');
         this.el.nativeElement.firstChild.classList.add('glyphicon-star-empty');
        }
    }

}