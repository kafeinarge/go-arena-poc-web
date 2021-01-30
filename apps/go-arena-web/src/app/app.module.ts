import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule, KafeinApiModule, WallModule } from '@kafein/services';
import { AuthGuard, LoginGuard } from '@kafein/utils';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { LoginModule } from './pages/login/login.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    WallModule,
    AuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    LoginModule,
    KafeinApiModule.forRoot({
      environment,
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthGuard,
    LoginGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
