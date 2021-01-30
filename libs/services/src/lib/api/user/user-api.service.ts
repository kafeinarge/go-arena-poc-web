import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '@kafein/data';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable()
export class UserApiService extends BaseService {
  getHttpParams(): HttpParams {
    return new HttpParams();
  }

  getServiceName(): string {
    return 'user';
  }

  getCurrentUser(): Observable<UserModel> {
    return this.get<UserModel>();
  }
}
