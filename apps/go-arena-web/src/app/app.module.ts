import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KafeinApiModule, WallModule } from '@kafein/services';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    KafeinApiModule.forRoot({
      environment
    }),
    WallModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
