import { MeteorComponent } from 'angular2-meteor';
import { FormControl } from '@angular/forms';
export declare class AuthService extends MeteorComponent {
    modes: {
        login: {
            title: string;
            description: string;
            recover: boolean;
            login: boolean;
            signup: boolean;
        };
        signup: {
            title: string;
            description: string;
            recover: boolean;
            login: boolean;
            signup: boolean;
        };
        recover: {
            title: string;
            description: string;
            recover: boolean;
            login: boolean;
            signup: boolean;
        };
    };
    getMode(mode: any): any;
    validateEmail(c: FormControl): {
        validateEmail: {
            valid: boolean;
        };
    };
    validatePassword(c: FormControl): {
        validatePassword: {
            valid: boolean;
        };
    };
    login(credentials: any, cb: any): void;
    signup(credentials: any, cb: any): void;
    recover(credentials: any, cb: any): void;
}
