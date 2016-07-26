"use strict";
var meteor_1 = require('meteor/meteor');
/**
 * A service to use as auth guard on the route.
 *
 */
var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!meteor_1.Meteor.user()) {
            this.router.navigate(['/login']);
        }
        return !!meteor_1.Meteor.user();
    };
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
