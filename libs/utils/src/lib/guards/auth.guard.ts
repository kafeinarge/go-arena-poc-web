import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { LocalStorageUtils } from '../other';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {
  }

  canActivate() {
    return this.isAuthenticated();
  }

  canActivateChild() {
    return this.isAuthenticated();
  }

  private isAuthenticated(): boolean {
    const accessToken = LocalStorageUtils.getAccessToken();
    if (!accessToken) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
