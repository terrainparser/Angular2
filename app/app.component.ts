import {Component} from "@angular/core";
import {TweetService} from './tweet.service';

@Component({
   selector: 'my-app',
      template:`<tweet-component *ngFor="let tweet of tweets" 
                  [ilike]="tweet.ilike" [likeCount]= "tweet.likeCount" 
                  [twitterName]='tweet.twitterName' [twitterHandle]='tweet.twitterHandle' 
                  [tweetText]="tweet.tweetText" [imageUrl]="tweet.imageUrl">
                </tweet-component>`
      //    template:`<div class="container-fluid">
      //                   <h1>My First Angular App</h1>
      //                  <favorite></favorite>
      //                  <favorite-heart></favorite-heart>
      //                  <vote [likeCount]='35'></vote>
      //                   <courses></courses>
      //                   <authors></authors>
      //             </div>
      //             `
})

export class AppComponent {
      tweets:Object=null;
      constructor(tweetService:TweetService){
            this.tweets=tweetService.getTweets()

      }

}