import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // If user is already authenticated, navigate to dashboard.
    const isAuthenticated = true;
    if (isAuthenticated) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
