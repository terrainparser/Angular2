
import {Component, Input, Output} from '@angular/core';

@Component({
    selector:'tweet-component',
    template:`<div class="media tweet">
                <div class="media-left">
                    <a href="#">
                    <img class="media-object" [src]="imageUrl" alt="Profile Image">
                    </a>
                </div>
                <div class="media-body container-fluid">
                    <h4 class="media-heading"><strong>{{twitterName}}</strong> 
                                            <span style="font-weight:lighter;"> {{twitterHandle}}</span></h4>
                    <span>{{tweetText}}</span><br/>
                    <favorite-heart [likeCount]= "likeCount" [isFavorite]="ilike"></favorite-heart>
                </div>
              </div>
             `,
     styles: [`.tweet{
                margin-bottom:5px;
                padding-bottom:5px;
                }
              
              `]
})
export class TweetComponent{
    @Input() twitterName="";
    @Input() twitterHandle="";

    @Input() tweetText=""
    @Input() likeCount=0;
    @Input() ilike=false;
    @Input() imageUrl="";
}