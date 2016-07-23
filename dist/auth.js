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
var meteor_1 = require('meteor/meteor');
var accounts_base_1 = require('meteor/accounts-base');
var angular2_meteor_1 = require('angular2-meteor');
var input_1 = require('@angular2-material/input');
var toolbar_1 = require('@angular2-material/toolbar');
var template = "\n<md-content layout=\"row\" layout-align=\"center start\" layout-fill layout-margin>\n    <div layout=\"column\" flex flex-md=\"50\" flex-lg=\"50\" flex-gt-lg=\"33\" class=\"md-whiteframe-z2\">\n        <md-toolbar class=\"md-primary\" color=\"primary\">\n            {{modes[mode].title}}\n        </md-toolbar>\n        <div layout=\"row\" layout-margin>\n            <p class=\"md-body-2\"> {{modes[mode].description}}</p>\n        </div>\n\n        <form #f=\"ngForm\" (submit)=\"onSubmit(f.value)\" layout=\"column\" layout-padding layout-margin>\n            <md-input ngModel #email=\"ngModel\" type=\"text\"  placeholder=\"Email\" name=\"email\" aria-label=\"email\"\n                      required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$\" >\n            </md-input>\n            <md-input ngModel type=\"password\" name=\"password\" placeholder=\"Password\" aria-label=\"password\" required\n                      pattern=\"(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" *ngIf=\"mode !=='recover'\">\n            </md-input>\n\n            <div layout=\"row\" layout-align=\"space-between center\">\n                <button md-button [routerLink]=\"['/recover']\" *ngIf=\"modes[mode].recover\">Forgot password?</button>\n                <button md-raised-button class=\"md-primary\" type=\"submit\" aria-label=\"login\" [disabled]=\"!f.valid\">Sign In\n                </button>\n            </div>\n        </form>\n        <div [hidden]=\"!error\">\n            <md-toolbar class=\"md-warn\" layout=\"row\" layout-fill layout-padding layout-margin>\n                <p class=\"md-body-1\">{{ error }}</p>\n            </md-toolbar>\n        </div>\n        <md-divider></md-divider>\n        <div layout=\"row\" layout-align=\"center-center\">\n            <button md-button [routerLink]=\"['/signup']\" *ngIf=\"modes[mode].signup\">Need an account?</button>\n            <div flex> </div>\n            <button md-button [routerLink]=\"['/login']\" *ngIf=\"modes[mode].login\">Already a User?</button>\n\n        </div>\n    </div>\n</md-content>\n";
var Auth = (function (_super) {
    __extends(Auth, _super);
    function Auth(router) {
        _super.call(this);
        this.router = router;
        this.modes = {
            login: {
                title: 'Log In',
                description: 'Sign in with your email',
                recover: true,
                login: false,
                signup: true,
                func: function (credentials, cb) {
                    return meteor_1.Meteor.loginWithPassword(credentials.email, credentials.password, cb);
                } },
            signup: {
                title: 'Sign up',
                description: 'Sign up with your email',
                recover: true,
                login: true,
                signup: false,
                func: function (credentials, cb) {
                    return accounts_base_1.Accounts.createUser({ email: credentials.email, password: credentials.password }, cb);
                }
            },
            recover: {
                title: 'Recover Password',
                description: 'Enter your email to recover your password',
                recover: false,
                login: true,
                signup: true,
                func: function (credentials, cb) {
                    accounts_base_1.Accounts.forgotPassword({ email: credentials.email }, cb);
                }
            }
        };
    }
    Auth.prototype.ngOnInit = function () {
    };
    Auth.prototype.isMode = function (mode) {
        return mode === this.mode;
    };
    Auth.prototype.onSubmit = function (credentials) {
        var _this = this;
        if (this.modes[this.mode] && this.modes[this.mode].func && typeof this.modes[this.mode].func === 'function') {
            this.modes[this.mode].func(credentials, function (err) {
                if (err) {
                    _this.error = err;
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        }
        else {
            console.log('unidentified mode in auth');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Auth.prototype, "mode", void 0);
    Auth = __decorate([
        core_1.Component({
            selector: 'auth',
            directives: [router_1.ROUTER_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, toolbar_1.MD_TOOLBAR_DIRECTIVES],
            template: template
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Auth);
    return Auth;
}(angular2_meteor_1.MeteorComponent));
exports.Auth = Auth;
