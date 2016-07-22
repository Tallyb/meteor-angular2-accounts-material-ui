import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeteorComponent } from 'angular2-meteor';
export declare class Auth extends MeteorComponent implements OnInit {
    private router;
    mode: string;
    error: string;
    modes: {
        login: {
            title: string;
            description: string;
            recover: boolean;
            login: boolean;
            signup: boolean;
            func: (credentials: any, cb: any) => void;
        };
        signup: {
            title: string;
            description: string;
            recover: boolean;
            login: boolean;
            signup: boolean;
            func: (credentials: any, cb: any) => string;
        };
        recover: {
            title: string;
            description: string;
            recover: boolean;
            login: boolean;
            signup: boolean;
            func: (credentials: any, cb: any) => void;
        };
    };
    constructor(router: Router);
    ngOnInit(): void;
    isMode(mode: any): boolean;
    onSubmit(credentials: any): void;
}
