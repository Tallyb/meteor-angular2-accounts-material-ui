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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var auth_service_1 = require('./auth.service');
var input_1 = require('@angular2-material/input');
var toolbar_1 = require('@angular2-material/toolbar');
var template = "\n<md-content layout=\"row\" layout-align=\"center start\" layout-fill layout-margin>\n    <div layout=\"column\" flex flex-md=\"50\" flex-lg=\"50\" flex-gt-lg=\"33\" class=\"md-whiteframe-z2\">\n        <md-toolbar class=\"md-primary\" color=\"primary\">\n            {{modeData.title}}\n        </md-toolbar>\n        <div layout=\"row\" layout-margin>\n            <p class=\"md-body-2\"> {{modeData.description}}</p>\n        </div>\n\n        <form [formGroup]=\"form\" (submit)=\"onSubmit(form.value)\" layout=\"column\" layout-padding layout-margin>\n            <md-input formControlName=\"email\" type=\"text\"  placeholder=\"Email\" aria-label=\"email\">\n            </md-input>\n            <md-input formControlName=\"password\" type=\"password\" placeholder=\"Password\" aria-label=\"password\" *ngIf=\"mode !=='recover'\">\n            <md-hint align=\"start\">Minimum 8 characters with 1 letter and 1 digit</md-hint>\n            </md-input>\n\n            <div layout=\"row\" layout-align=\"space-between center\">\n                <button md-button [routerLink]=\"['/recover']\" *ngIf=\"modeData.recover\">Forgot password?</button>\n                <button md-raised-button class=\"md-primary\" type=\"submit\" aria-label=\"login\" [disabled]=\"!form.valid\">Sign In\n                </button>\n            </div>\n        </form>\n        <div [hidden]=\"!error\">\n            <md-toolbar class=\"md-warn\" layout=\"row\" layout-fill layout-padding layout-margin>\n                <p class=\"md-body-1\">{{ error }}</p>\n            </md-toolbar>\n        </div>\n        <md-divider></md-divider>\n        <div layout=\"row\" layout-align=\"center-center\">\n            <button md-button [routerLink]=\"['/signup']\" *ngIf=\"modeData.signup\">Need an account?</button>\n            <div flex> </div>\n            <button md-button [routerLink]=\"['/login']\" *ngIf=\"modeData.login\">Already a User?</button>\n\n        </div>\n    </div>\n</md-content>\n";
var Auth = (function () {
    function Auth(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    Auth.prototype.ngOnInit = function () {
        this.modeData = this.authService.getMode(this.mode);
        if (!this.modeData) {
            console.log('Unknown Mode');
            this.router.navigate(['/']);
        }
        this.form = this.formBuilder.group({
            email: ['', forms_1.Validators.required, this.authService.validateEmail],
            password: ['', forms_1.Validators.required, this.authService.validatePassword]
        });
    };
    Auth.prototype.onSubmit = function (credentials) {
        var _this = this;
        this.authService[this.mode](credentials, function (err) {
            if (err) {
                _this.error = err;
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Auth.prototype, "mode", void 0);
    Auth = __decorate([
        core_1.Component({
            selector: 'auth',
            providers: [forms_1.FormBuilder, router_1.Router, auth_service_1.AuthService],
            directives: [router_1.ROUTER_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, toolbar_1.MD_TOOLBAR_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            template: template
        }), 
        __metadata('design:paramtypes', [router_1.Router, forms_1.FormBuilder, auth_service_1.AuthService])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;
