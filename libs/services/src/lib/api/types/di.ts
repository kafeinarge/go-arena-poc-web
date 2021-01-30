import { InjectionToken } from '@angular/core';
import { ApiServiceConfig } from '@kafein/services';

/**
 * - Since this token is for internal purposes only, we would not export
 *   this file outside the library.
 * - Creating the DI token in a separate file helps prevent
 *   circular dependencies.
 */
export const API_SERVICE_CONFIG_TOKEN = new InjectionToken<ApiServiceConfig>('API_SERVICE_CONFIG');
export const PRODUCT_SERVICE_CONFIG_TOKEN = new InjectionToken<ApiServiceConfig>('PRODUCT_SERVICE_CONFIG_TOKEN');
export const USER_SERVICE_CONFIG_TOKEN = new InjectionToken<ApiServiceConfig>('USER_SERVICE_CONFIG_TOKEN');
