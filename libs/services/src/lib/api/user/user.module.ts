import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiServiceConfig } from '../types';
import { USER_SERVICE_CONFIG_TOKEN } from '../types/di';
import { UserApiService } from './user-api.service';
import { UserFacadeService } from './user-facade.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UserFacadeService, UserApiService]
})
export class UserModule {
  static forRoot(config: ApiServiceConfig): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [{ provide: USER_SERVICE_CONFIG_TOKEN, useValue: config }]
    };
  }
}
