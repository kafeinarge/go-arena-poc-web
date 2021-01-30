import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzDropDownModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
