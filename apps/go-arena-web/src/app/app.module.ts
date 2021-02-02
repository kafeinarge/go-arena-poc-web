import { CommonModule, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModule, KafeinApiModule, UserModule, WallModule} from '@kafein/services';
import { AuthGuard, LoaderInterceptor, LoginGuard, TokenExpiredInterceptor } from '@kafein/utils';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzNotificationServiceModule } from 'ng-zorro-antd/notification';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginModule } from './pages/login/login.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    WallModule,
    UserModule,
    AuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    LoginModule,
    NzLayoutModule,
    NzDropDownModule,
    NzNotificationServiceModule,
    NgxUiLoaderModule,
    KafeinApiModule.forRoot({
      environment,
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthGuard,
    LoginGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenExpiredInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
