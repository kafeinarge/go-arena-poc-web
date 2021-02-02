import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '@kafein/data';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { LocalStorageUtils, parseJwt } from '@kafein/utils';
import { JwtTokenModel } from '@kafein/services';

@Injectable()
export class UserApiService extends BaseService {
  getHttpParams(): HttpParams {
    return new HttpParams();
  }

  getServiceName(): string {
    return 'user-service';
  }


  getCurrentUser(): Observable<UserModel> {
    const parsedJwt: JwtTokenModel = parseJwt(LocalStorageUtils.getAccessToken());
    console.log(parsedJwt);

    return this.get<UserModel>('username/' + parsedJwt.sub);
  }
}
