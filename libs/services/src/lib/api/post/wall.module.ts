import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiServiceConfig } from '../types';
import { PRODUCT_SERVICE_CONFIG_TOKEN } from '../types/di';
import { WallApiService } from './wall-api.service';
import { WallFacadeService } from './wall-facade.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [WallFacadeService, WallApiService]
})
export class WallModule {
  static forRoot(config: ApiServiceConfig): ModuleWithProviders<WallModule> {
    return {
      ngModule: WallModule,
      providers: [{ provide: PRODUCT_SERVICE_CONFIG_TOKEN, useValue: config }]
    };
  }
}
