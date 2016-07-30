#meteor-angular2-accounts-material-ui

##Overview
Provides a UI for meteor-accounts based on material design and Angular 2: 
- Login (/login), Signup (/signup) and - Password recovery (/recover) screens
- <user-menu> with login buttons (when not logged in) and username and logout button (when logged in) 
- @injectUser decorator to get user in component
- AuthGuard for logged in routes
- Display name pipe to show user full name 

This package is based on the work done for [angular2-meteor-accounts-ui](https://github.com/Urigo/angular2-meteor-accounts-ui.git)

## Quick Start

`npm install meteor-angular2-accounts-material-ui`


##usage 

~~~~
import { provideRouter, RouterConfig } from '@angular/router';
import {AUTH_ROUTES, AuthGuard} from 'meteor-angular2-accounts-material-ui';
import {Main} from '../main/main';
import {Protected} from '../main/protected';

const routes: RouterConfig = [
    ...AUTH_ROUTES,
    { path: '', component: Main },
    { path: 'protected', component: Protected, canActivate: [AuthGuard] }

];

export const appRouterProviders = [
    provideRouter(routes)
];

bootstrap (app, appRouterPoviders); // can be done in another file
~~~~


## Dependencies
- Angular2 - rc4
- Router v3 - beta 2
- Angular2-forms
- Angular-meteor 0.6.0
- Ng-material (css only)
- Angular2-material: input, toolbar

## Change Log
Change log of the package is located [here](CHANGELOG.md).

## To Do
- reactive listening to logout
- oAuth providers (Google, Facebook, Twitter...)
- Phone login
- 

