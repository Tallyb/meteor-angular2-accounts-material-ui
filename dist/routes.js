"use strict";
var login_1 = require('./login');
var signup_1 = require('./signup');
var recover_1 = require('./recover');
exports.AUTH_ROUTES = [
    { path: 'login', component: login_1.Login },
    { path: 'signup', component: signup_1.Signup },
    { path: 'recover', component: recover_1.Recover }
];
