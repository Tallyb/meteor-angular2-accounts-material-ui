import { Component, OnInit, Input } from '@angular/core';
import { Router , ROUTER_DIRECTIVES} from '@angular/router';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { MeteorComponent } from 'angular2-meteor';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import {validateEmail, validatePassword} from './auth.validators';

const template = `
<md-content layout="row" layout-align="center start" layout-fill layout-margin>
    <div layout="column" flex flex-md="50" flex-lg="50" flex-gt-lg="33" class="md-whiteframe-z2">
        <md-toolbar class="md-primary" color="primary">
            {{modes[mode].title}}
        </md-toolbar>
        <div layout="row" layout-margin>
            <p class="md-body-2"> {{modes[mode].description}}</p>
        </div>

        <form [formGroup]="form" (submit)="onSubmit(form.value)" layout="column" layout-padding layout-margin>
            <md-input formControlName="email" type="text"  placeholder="Email" aria-label="email">
            </md-input>
            <md-input formControlName="password" type="password" placeholder="Password" aria-label="password" *ngIf="mode !=='recover'">
            <md-hint align="start">Minimum 8 characters with 1 letter and 1 digit</md-hint>
            </md-input>

            <div layout="row" layout-align="space-between center">
                <button md-button [routerLink]="['/recover']" *ngIf="modes[mode].recover">Forgot password?</button>
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
            <button md-button [routerLink]="['/signup']" *ngIf="modes[mode].signup">Need an account?</button>
            <div flex> </div>
            <button md-button [routerLink]="['/login']" *ngIf="modes[mode].login">Already a User?</button>

        </div>
    </div>
</md-content>
`;

@Component({
    selector: 'auth',
    directives: [ ROUTER_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    template
})
export class Auth extends MeteorComponent implements OnInit {
    @Input() mode: string;

    form: FormGroup;
    error: string;

    modes = {
        login: {
            title: 'Log In',
            description: 'Sign in with your email',
            recover: true,
            login: false,
            signup: true,
            func: (credentials, cb) => {
                return Meteor.loginWithPassword(credentials.email, credentials.password, cb);
            } },
        signup: {
            title: 'Sign up',
            description: 'Sign up with your email',
            recover: true,
            login: true,
            signup: false,
            func: (credentials, cb) => {
                return  Accounts.createUser ({email: credentials.email, password: credentials.password}, cb);
            }
        },
        recover: {
            title: 'Recover Password',
            description: 'Enter your email to recover your password',
            recover: false,
            login: true,
            signup: true,
            func: (credentials, cb) => {
                Accounts.forgotPassword ({email: credentials.email}, cb);
            }
        }
    };

    constructor(private router: Router, private formBuilder: FormBuilder) {
        super();

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required, validateEmail],
            password: ['', Validators.required, validatePassword]
        });
    }

    onSubmit (credentials) {

        if ( this.modes[this.mode] && this.modes[this.mode].func &&  typeof this.modes[this.mode].func === 'function') {
            this.modes[this.mode].func (credentials, (err) => {
                if (err) {
                    this.error = err;
                } else {
                    this.router.navigate(['/']);
                }
            });
        } else {
            console.log ('unidentified mode in auth');
        }

    }
}
