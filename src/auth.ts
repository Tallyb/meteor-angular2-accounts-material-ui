import { Component, OnInit, Input } from '@angular/core';
import { Router , ROUTER_DIRECTIVES} from '@angular/router';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators} from '@angular/forms';

import {AuthService} from './auth.service';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

const template = `
<md-content layout="row" layout-align="center start" layout-fill layout-margin>
    <div layout="column" flex flex-md="50" flex-lg="50" flex-gt-lg="33" class="md-whiteframe-z2">
        <md-toolbar class="md-primary" color="primary">
            {{modeData.title}}
        </md-toolbar>
        <div layout="row" layout-margin>
            <p class="md-body-2"> {{modeData.description}}</p>
        </div>

        <form [formGroup]="form" (submit)="onSubmit(form.value)" layout="column" layout-padding layout-margin>
            <md-input formControlName="email" type="text"  placeholder="Email" aria-label="email">
            </md-input>
            <md-input formControlName="password" type="password" placeholder="Password" aria-label="password" *ngIf="mode !=='recover'">
            <md-hint align="start">Minimum 8 characters with 1 letter and 1 digit</md-hint>
            </md-input>

            <div layout="row" layout-align="space-between center">
                <button md-button [routerLink]="['/recover']" *ngIf="modeData.recover">Forgot password?</button>
                <button md-raised-button class="md-primary" type="submit" aria-label="login" [disabled]="!form.valid">Sign In
                </button>
            </div>
        </form>
        <div [hidden]="!error">
            <md-toolbar class="md-warn" layout="row" layout-fill layout-padding layout-margin>
                <p class="md-body-1">{{ error }}</p>
            </md-toolbar>
        </div>
        <md-divider></md-divider>
        <div layout="row" layout-align="center-center">
            <button md-button [routerLink]="['/signup']" *ngIf="modeData.signup">Need an account?</button>
            <div flex> </div>
            <button md-button [routerLink]="['/login']" *ngIf="modeData.login">Already a User?</button>

        </div>
    </div>
</md-content>
`;

@Component({
    selector: 'auth',
    providers: [FormBuilder, Router, AuthService],
    directives: [ ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    template
})
export class Auth implements OnInit {
    @Input() mode: string;

    form: FormGroup;
    error: string;
    modeData: {};

    constructor(private router: Router, private formBuilder: FormBuilder, private  authService: AuthService) {
    }

    ngOnInit() {
        this.modeData = this.authService.getMode (this.mode);
        if (!this.modeData) {
            console.log ('Unknown Mode');
            this.router.navigate(['/']);
        }
        this.form = this.formBuilder.group({
            email: ['', Validators.required, this.authService.validateEmail],
            password: ['', Validators.required, this.authService.validatePassword]
        });
    }

    onSubmit (credentials) {

        this.authService[this.mode] (credentials, (err) => {
            if (err) {
                this.error = err;
            } else {
                this.router.navigate(['/']);
            }
        });

    }
}
