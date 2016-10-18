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
var core_1 = require('@angular/core');
var account_service_1 = require('./account.service');
var AppComponent = (function () {
    function AppComponent(accountService) {
        this.accountService = accountService;
        this.title = 'Welcome, ';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("HERE: " + window.location.pathname);
        this.accountService
            .getAll()
            .subscribe(function (p) {
            _this.firstName = p[0].name;
            _this.ficoScore = p[0].ficoScore;
            _this.lastSignOn = p[0].lastSignOn;
            _this.ficoUrl = p[0].ficoUrl;
        });
        //console.log(person);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            //template: "<h1> {{title}} {{firstName}}</h1>",
            templateUrl: "templates/dash.html",
            providers: [account_service_1.AccountService]
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map