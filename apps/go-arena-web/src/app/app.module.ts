import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthModule, KafeinApiModule, WallModule } from '@kafein/services';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    KafeinApiModule.forRoot({
      environment,
    }),
    WallModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
