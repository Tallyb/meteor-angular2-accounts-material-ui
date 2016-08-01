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
var meteor_1 = require('meteor/meteor');
var accounts_base_1 = require('meteor/accounts-base');
var angular2_meteor_1 = require('angular2-meteor');
var core_1 = require('@angular/core');
var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService() {
        _super.apply(this, arguments);
        this.modes = {
            login: {
                title: 'Log In',
                description: 'Sign in with your email',
                recover: true,
                login: false,
                signup: true
            },
            signup: {
                title: 'Sign up',
                description: 'Sign up with your email',
                recover: true,
                login: true,
                signup: false
            },
            recover: {
                title: 'Recover Password',
                description: 'Enter your email to recover your password',
                recover: false,
                login: true,
                signup: true
            }
        };
    }
    AuthService.prototype.getMode = function (mode) {
        return this.modes[mode];
    };
    AuthService.prototype.validateEmail = function (c) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    //Minimum 8 characters at least 1 Alphabet, 1 Number and
    AuthService.prototype.validatePassword = function (c) {
        var PASS_REGEXP = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
        return PASS_REGEXP.test(c.value) ? null : {
            validatePassword: {
                valid: false
            }
        };
    };
    AuthService.prototype.login = function (credentials, cb) {
        return meteor_1.Meteor.loginWithPassword(credentials.email, credentials.password, cb);
    };
    AuthService.prototype.signup = function (credentials, cb) {
        return meteor_1.Meteor.loginWithPassword(credentials.email, credentials.password, cb);
    };
    AuthService.prototype.recover = function (credentials, cb) {
        accounts_base_1.Accounts.forgotPassword({ email: credentials.email }, cb);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}(angular2_meteor_1.MeteorComponent));
exports.AuthService = AuthService;
