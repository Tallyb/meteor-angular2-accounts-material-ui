import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { MeteorComponent } from 'angular2-meteor';

import {FormControl} from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable()

export class AuthService extends MeteorComponent {

    modes = {
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

    getMode  (mode) {
        return this.modes[mode];
    }

    validateEmail (c: FormControl)  {
    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
}
//Minimum 8 characters at least 1 Alphabet, 1 Number and
    validatePassword (c: FormControl) {
    let PASS_REGEXP  = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;

    return PASS_REGEXP.test(c.value) ? null : {
        validatePassword: {
            valid: false
        }
    };
}

    login (credentials, cb) {
        return Meteor.loginWithPassword(credentials.email, credentials.password, cb);
    }

    signup (credentials, cb) {
        return Meteor.loginWithPassword(credentials.email, credentials.password, cb);
    }

    recover (credentials, cb) {
        Accounts.forgotPassword ({email: credentials.email}, cb);
    }
}
