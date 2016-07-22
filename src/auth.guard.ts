import { CanActivate } from '@angular/router';

import { Meteor } from 'meteor/meteor';


/**
 * A service to use as auth guard on the route.
 *
 */
export class AuthGuard implements CanActivate {

    canActivate() {
        return !!Meteor.user();

    }
}


