import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { LoginResponse } from './models';
import { LoginDto } from './models';

@Injectable()
export class AuthService extends BaseService {
  getHttpParams(): HttpParams {
    return undefined;
  }

  getServiceName(): string {
    return 'uaa-server';
  }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.post('auth/login', loginDto);
  }
}
