"use strict";
var meteor_1 = require('meteor/meteor');
/**
 * A service to use as auth guard on the route.
 *
 */
var AuthGuard = (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function () {
        return !!meteor_1.Meteor.user();
    };
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
