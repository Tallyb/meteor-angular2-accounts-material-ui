import { CanActivate , Router} from '@angular/router';

import { Meteor } from 'meteor/meteor';


/**
 * A service to use as auth guard on the route.
 *
 */
export class AuthGuard implements CanActivate {

    constructor (private router: Router) {

    }
    canActivate() {
        if (!Meteor.user()) {
            this.router.navigate(['/login']);
        }
        return !!Meteor.user();
    }
}


