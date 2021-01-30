import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Config } from '@kafein/data';
import { createHttpParams } from '@kafein/utils';
import { Observable } from 'rxjs';
import { ApiServiceConfig, DEFAULT_BASE_URL } from './types';
import { API_SERVICE_CONFIG_TOKEN } from './types/di';

@Injectable()
export abstract class BaseService {

  defaultHeaders: HttpHeaders = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });

  public constructor(
    private _httpClient: HttpClient,
    @Optional() @Inject(API_SERVICE_CONFIG_TOKEN) private readonly config: ApiServiceConfig | null,
  ) {
  }

  get baseApiUrl(): string {
    return this.config?.environment?.baseApiUrl || DEFAULT_BASE_URL;
  }

  get httpClient(): HttpClient {
    return this._httpClient;
  }

  abstract getServiceName(): string;

  abstract getHttpParams(): HttpParams;

  protected get<T>(url?: string | undefined, config?: Config): Observable<T> {
    return this._httpClient.get<T>(this.getFullPath(url), { params: createHttpParams(this.getHttpParams(), config) });
  }

  protected post<T>(url: string, body?: unknown, params?: HttpParams): Observable<T> {
    if (params) {
      return this._httpClient.post<T>(this.getFullPath(url), body, { params, headers: this.defaultHeaders });
    } else {
      return this._httpClient.post<T>(this.getFullPath(url), body, {headers: this.defaultHeaders});
    }
  }

  protected put<T>(url: string, body?: unknown, params?: HttpParams): Observable<T> {
    if (params) {
      return this._httpClient.put<T>(this.getFullPath(url), body, { params });
    } else {
      return this._httpClient.put<T>(this.getFullPath(url), body);
    }
  }

  protected delete<T>(url: string | undefined): Observable<T> {
    return this._httpClient.delete<T>(this.getFullPath(url));
  }

  protected purePost<T>(url: string, body?: unknown): Observable<T> {
    const generatedUrl = `${ this.baseApiUrl }/${ url }`;
    return this._httpClient.post<T>(generatedUrl, body);
  }

  protected pureGet<T>(url: string): Observable<T> {
    const generatedUrl = `${ this.baseApiUrl }/${ url }`;
    return this._httpClient.get<T>(generatedUrl, { params: this.getHttpParams() });
  }

  private getFullPath(url: string | undefined) {
    if (url && url.length > 0) {
      return `${ this.baseApiUrl }/${ this.getServiceName() }/${ url }`;
    } else {
      return `${ this.baseApiUrl }/${ this.getServiceName() }`;
    }
  }
}
