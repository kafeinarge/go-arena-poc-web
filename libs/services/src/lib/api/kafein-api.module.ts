import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { ApiServiceConfig } from '@kafein/services';
import { LocalStorageUtils } from '@kafein/utils';
import { API_SERVICE_CONFIG_TOKEN } from './types/di';

@NgModule({
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => LocalStorageUtils.getAccessToken(),
        allowedDomains: ['localhost:8765', '167.172.180.49:8765'],
      },
    }),
  ],
})
export class KafeinApiModule {
  static forRoot(config: ApiServiceConfig): ModuleWithProviders<KafeinApiModule> {
    return {
      ngModule: KafeinApiModule,
      providers: [{ provide: API_SERVICE_CONFIG_TOKEN, useValue: config }],
    };
  }
}
