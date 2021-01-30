import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageUtils } from '@kafein/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { LoginResponse, LoginDto } from './models';

@Injectable()
export class AuthService extends BaseService {

  getHttpParams(): HttpParams {
    return undefined;
  }

  getServiceName(): string {
    return 'uaa-server';
  }

  isLoggedIn = new BehaviorSubject(false);
  hasToken = LocalStorageUtils.getItem('access_token');

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.post('auth/login', loginDto);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.isLoggedIn.next(false);
    this.router.navigateByUrl('/login');
  }
}
