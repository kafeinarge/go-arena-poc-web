import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageUtils } from '../other';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate() {
    // If user already has token, navigate to dashboard.
    const accessToken = LocalStorageUtils.getAccessToken();
    if (accessToken) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
