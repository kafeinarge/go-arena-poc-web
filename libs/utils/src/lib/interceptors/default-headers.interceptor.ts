// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Store } from '@ngxs/store';
// import { Observable } from 'rxjs';
// import { AuthStateModel } from '../../store/auth/auth.action';
// import { AuthState } from '../../store/auth/auth.state';
//
// const DEFAULT_LANG = 'en';
//
// @Injectable()
// export class DefaultHeadersInterceptor implements HttpInterceptor {
//   constructor(private store: Store) {
//   }
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const currentLang = DEFAULT_LANG;
//     const authState = this.store.selectSnapshot<AuthStateModel>(AuthState);
//     // const authState = {accessToken: 'test'};
//
//     // do not set headers or something i18n (translation) requests
//     if (request.url.includes('i18n')) {
//       return next.handle(request);
//     }
//
//     if (authState?.accessToken) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: 'Bearer ' + authState.accessToken,
//           'Accept-Language': currentLang,
//         },
//         withCredentials: false,
//       });
//     } else {
//       request = request.clone({
//         setHeaders: {
//           'Accept-Language': currentLang,
//         },
//         withCredentials: false,
//       });
//     }
//     return next.handle(request);
//   }
// }
