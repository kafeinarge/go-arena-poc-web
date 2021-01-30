import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router
  ) {
  }

  canActivate() {
    return this.isAuthenticated();
  }

  canActivateChild() {
    return this.isAuthenticated();
  }

  private isAuthenticated(): boolean {
    const isAuthenticated = true;
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
