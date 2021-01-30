import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiServiceConfig } from '@kafein/services';
import { API_SERVICE_CONFIG_TOKEN } from './types/di';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: []
})
export class KafeinApiModule {
  static forRoot(config: ApiServiceConfig): ModuleWithProviders<KafeinApiModule> {
    return {
      ngModule: KafeinApiModule,
      providers: [{ provide: API_SERVICE_CONFIG_TOKEN, useValue: config }]
    };
  }
}
