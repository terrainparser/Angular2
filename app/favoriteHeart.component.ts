import {Component, Input, Renderer} from '@angular/core'

@Component({
    selector:'favorite-heart',
    template:`<i class="glyphicon glyphicon-heart" [class.highlight]="isFavorite" (click)="onClick()"> </i>
   {{likeCount}}
    `,
    styles:[`
            .glyphicon-heart{
                color:#ccc;
                cursor:pointer;
            }

            .highlight{
                color:deeppink;
            }
    `]
})

export class FavoriteHeartComponent{
    @Input() isFavorite=false;
    @Input() likeCount=0;

    constructor(){

    }
    onClick(){
        this.isFavorite=!this.isFavorite;
        if(this.isFavorite){
             this.likeCount++;
        }
        else{
            this.likeCount--;
        }
    }
}