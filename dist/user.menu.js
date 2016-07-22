"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var router_1 = require('@angular/router');
var inject_user_1 = require('./inject.user');
var meteor_1 = require('meteor/meteor');
var angular2_meteor_1 = require('angular2-meteor');
var display_name_pipe_1 = require('./display.name.pipe');
var UserMenu = (function (_super) {
    __extends(UserMenu, _super);
    function UserMenu() {
        _super.call(this);
    }
    UserMenu.prototype.logout = function () {
        this.autorun(function () {
            meteor_1.Meteor.logout();
        });
    };
    UserMenu = __decorate([
        core_1.Component({
            selector: 'user-menu',
            template: "\n          <div layout=\"row\">\n            <div [hidden]=\"user\">\n              <button md-button [routerLink]=\"['/login']\" >Login</button>\n              <button md-button [routerLink]=\"['/signup']\">Sign up</button>\n            </div>\n            <div [hidden]=\"!user\">\n              <span>{{ user | userDisplayName }}</span>\n              <button md-button (click)=\"logout()\">Logout</button>\n            </div>\n          </div>\n",
            directives: [router_1.ROUTER_DIRECTIVES],
            pipes: [display_name_pipe_1.UserDisplayName]
        }),
        inject_user_1.InjectUser('user'), 
        __metadata('design:paramtypes', [])
    ], UserMenu);
    return UserMenu;
}(angular2_meteor_1.MeteorComponent));
exports.UserMenu = UserMenu;
