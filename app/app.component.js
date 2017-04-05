"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var github_users_service_1 = require("./github-users.service");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/timeout");
require("rxjs/add/operator/retry");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/from");
require("rxjs/add/observable/of");
require("rxjs/add/observable/empty");
require("rxjs/add/observable/range");
require("rxjs/add/observable/interval");
require("rxjs/add/observable/forkJoin");
var AppComponent = (function () {
    function AppComponent(githubUserService) {
        var _this = this;
        this.isLoading = true;
        this.data = { 'user': [], 'followers': [] };
        console.log('initializing :' + new Date());
        var data = githubUserService.getUsersAndFollowers('octocat')
            .map(function (res) { return { 'user': res[0], 'followers': res[1] }; }).debounceTime(500);
        data.subscribe(function (x) {
            _this.data = x;
            //    this.data.user=x.user;
            //    this.data.followers=x.followers
        }, function (error) { return console.log(error); }, function () {
            _this.isLoading = false;
            console.log('Completed Loading:' + new Date());
        });
        console.log(this.data);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // template: ` `,
        templateUrl: 'app/github-users.component.html',
        styles: [".avatar{\n                width:100px;\n                height:100px;\n                border-radius:50%;\n                };"]
    })
    // @Component({
    //     selector: 'my-app',
    //     template: `
    //         <form [formGroup]="form">
    //             <input type="text" formControlName="search">
    //         </form>
    //     `
    // })
    ,
    __metadata("design:paramtypes", [github_users_service_1.GithubUsersService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map