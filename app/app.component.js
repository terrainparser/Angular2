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
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
var AppComponent = (function () {
    function AppComponent(fb) {
        this.form = fb.group({
            search: []
        });
        var search = this.form.get('search');
        search.debounceTime(400).map(function (str) { return str.replace(' ', '-'); }).valueChanges.subscribe(function (x) { return console.log(x); });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <form [formGroup]=\"form\">\n            <input type=\"text\" formControlName=\"search\">\n        </form>\n    "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map