import { CanActivate, Router } from '@angular/router';
/**
 * A service to use as auth guard on the route.
 *
 */
export declare class AuthGuard implements CanActivate {
    private router;
    constructor(router: Router);
    canActivate(): boolean;
}
