import {FormControl} from '@angular/forms';

export function validateEmail (c: FormControl)  {
    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
}
//Minimum 8 characters at least 1 Alphabet, 1 Number and
export function validatePassword (c: FormControl) {
    let PASS_REGEXP  = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;

    return PASS_REGEXP.test(c.value) ? null : {
        validatePassword: {
            valid: false
        }
    };
}
