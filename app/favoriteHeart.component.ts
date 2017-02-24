import {Component} from '@angular/core'

@Component({
    selector:'favorite-heart',
    template:`<i class="glyphicon" [class.glyphicon-heart-empty]="!isFavorite" [class.glyphicon-heart]="isFavorite" (click)="onClick()"> </i>
    {{likeCount}}
    `
})

export class FavoriteHeartComponent{
    isFavorite=false;
    likeCount=10;
    onClick(){
        if(this.isFavorite){
            this.likeCount++;
        }
        else{
            this.likeCount--;
        }
        this.isFavorite=!this.isFavorite;
    }
}