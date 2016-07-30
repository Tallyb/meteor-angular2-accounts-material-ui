import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeteorComponent } from 'angular2-meteor';
export declare class Auth extends MeteorComponent implements OnInit {
    private router;
    private formBuilder;
    mode: string;
    form: FormGroup;
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
    constructor(router: Router, formBuilder: FormBuilder);
    ngOnInit(): void;
    onSubmit(credentials: any): void;
}
