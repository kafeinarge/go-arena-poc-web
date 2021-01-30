import { HttpParams } from '@angular/common/http';

export class HttpParamsBuilder {
  constructor(public httpParams: HttpParams) {
  }

  setCustomParams(customParams: any): HttpParamsBuilder {
    if (customParams) {
      for (const param in customParams) {
        if (customParams.hasOwnProperty(param)) {
          this.httpParams = this.httpParams.append(param, customParams[param].toString());
        }
      }
    }
    return this;
  }

  setPageableParams(pageableParams: any): HttpParamsBuilder {
    if (pageableParams) {
      this.httpParams = this.httpParams
        .append('page', `${ pageableParams?.page }`)
        .append('size', `${ pageableParams?.size }`);
    }
    return this;
  }

  build(): HttpParams {
    return this.httpParams;
  }
}
