import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';
export declare class Auth implements OnInit {
    private router;
    private formBuilder;
    private authService;
    mode: string;
    form: FormGroup;
    error: string;
    modeData: {};
    constructor(router: Router, formBuilder: FormBuilder, authService: AuthService);
    ngOnInit(): void;
    onSubmit(credentials: any): void;
}
