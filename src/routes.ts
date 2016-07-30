import { RouterConfig } from '@angular/router';
import {Login, Signup, Recover} from './components';

export const AUTH_ROUTES: RouterConfig = [
    { path: 'login', component: Login },
    { path: 'signup',  component: Signup },
    { path: 'recover', component: Recover }
];

