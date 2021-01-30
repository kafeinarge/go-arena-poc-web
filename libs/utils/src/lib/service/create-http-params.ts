import { HttpParams } from '@angular/common/http';
import { Config } from '@kafein/data';
import { HttpParamsBuilder } from '../other';

export const createHttpParams = (httpParams: HttpParams, config: Config | undefined): HttpParams => {
  if (!config) {
    return httpParams;
  }

  httpParams = new HttpParamsBuilder(httpParams)
    .setPageableParams(config?.pageableParams)
    .setCustomParams(config?.customParams)
    .build();
  return httpParams;
};
