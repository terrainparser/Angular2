import {Component} from "@angular/core";
import {TweetService} from './tweet.service';
//import {MenuService} from './menu.service';

@Component({
   selector: 'my-app',
   template:`<userForm></userForm>`
//    template:`<zippy [isActive]=true>
//                    <div class="zippyHeading">This is heading</div>
//                    <div class="zippyBody">This is body</div>
//                    <div class="zippyBody">This is also body</div>
//             </zippy>
//             <zippy [isActive]=true >
//                    <div class="zippyHeading">This is heading</div>
//                    <div class="zippyBody">This is body</div>
//                    <div class="zippyBody">This is also body</div>
//             </zippy>
//             <zippy [isActive]=true >
//                    <div class="zippyHeading">This is heading</div>
//                    <div class="zippyBody">This is body</div>
//                    <div class="zippyBody">This is also body</div>
//             </zippy>
//             `
      // template:`<tweet-component *ngFor="let tweet of tweets" 
      //             [ilike]="tweet.ilike" [likeCount]= "tweet.likeCount" 
      //             [twitterName]='tweet.twitterName' [twitterHandle]='tweet.twitterHandle' 
      //             [tweetText]="tweet.tweetText" [imageUrl]="tweet.imageUrl">
      //           </tweet-component>`
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
      // tweets:Object=null;
      // constructor(tweetService:TweetService){
      //       this.tweets=tweetService.getTweets()

      // }
      // menuItems:Object=null;
      // constructor(menuService:MenuService){
      //       this.menuItems=menuService.getMenuDetails();
      // }

}