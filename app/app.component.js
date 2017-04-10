"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
    // @Component({
    //     selector: 'my-app',
    //     template: `
    //         <form [formGroup]="form">
    //             <input type="text" formControlName="search">
    //         </form>
    //     `
    // })
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // template: ` `,
        // templateUrl:'app/github-users.component.html',
        //templateUrl:'/app/app.component.html',
        template: "<ul>\n                <li><a routerLink=\"\">Home</a></li>\n                <li><a routerLink=\"messages\">Messages</a></li>\n                <li><a routerLink=\"photos\">Photos</a></li>\n                </ul>\n                <router-outlet></router-outlet>",
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
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map