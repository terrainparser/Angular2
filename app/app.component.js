"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import {MenuService} from './menu.service';
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<zippy [isActive]=true>\n                   <div class=\"zippyHeading\">This is heading</div>\n                   <div class=\"zippyBody\">This is body</div>\n                   <div class=\"zippyBody\">This is also body</div>\n            </zippy>\n            <zippy [isActive]=true >\n                   <div class=\"zippyHeading\">This is heading</div>\n                   <div class=\"zippyBody\">This is body</div>\n                   <div class=\"zippyBody\">This is also body</div>\n            </zippy>\n            <zippy [isActive]=true >\n                   <div class=\"zippyHeading\">This is heading</div>\n                   <div class=\"zippyBody\">This is body</div>\n                   <div class=\"zippyBody\">This is also body</div>\n            </zippy>\n            "
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
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map