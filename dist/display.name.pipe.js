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
require('reflect-metadata');
var core_1 = require('@angular/core');
var UserDisplayName = (function () {
    function UserDisplayName() {
    }
    UserDisplayName.prototype.transform = function (user) {
        if (!user) {
            return '';
        }
        if (user.username) {
            return user.username;
        }
        if (user.emails) {
            return user.emails[0].address;
        }
        return '';
    };
    UserDisplayName = __decorate([
        core_1.Pipe({
            name: 'userDisplayName'
        }), 
        __metadata('design:paramtypes', [])
    ], UserDisplayName);
    return UserDisplayName;
}());
exports.UserDisplayName = UserDisplayName;
