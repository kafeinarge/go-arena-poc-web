export class LocalStorageUtils {
  static setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }
  static getItem(itemKey: string): string {
    return localStorage.getItem(itemKey);
  }

  static getAccessToken(): string {
    return localStorage.getItem('access_token');
  }
}
