import { Environment } from '@kafein/data';

export interface ApiServiceConfig {
  environment?: Environment;
  productConfig?: unknown,
  userConfig?: unknown,
}

export const DEFAULT_BASE_URL = 'http://localhost:5000';
