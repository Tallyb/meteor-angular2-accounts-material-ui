"use strict";
function validateEmail(c) {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
}
exports.validateEmail = validateEmail;
//Minimum 8 characters at least 1 Alphabet, 1 Number and
function validatePassword(c) {
    var PASS_REGEXP = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
    return PASS_REGEXP.test(c.value) ? null : {
        validatePassword: {
            valid: false
        }
    };
}
exports.validatePassword = validatePassword;
