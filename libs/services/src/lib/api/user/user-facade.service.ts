import { Injectable } from '@angular/core';
import { UserModel } from '@kafein/data';
import { Observable } from 'rxjs';
import { UserApiService } from './user-api.service';

@Injectable()
export class UserFacadeService {

  constructor(private userService: UserApiService) {
  }

  getCurrentUser(): Observable<UserModel> {
    return this.userService.getCurrentUser();
  }
}
