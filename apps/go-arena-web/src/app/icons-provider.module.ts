import { NgModule } from '@angular/core';

import { DashboardOutline, FormOutline, MenuFoldOutline, MenuUnfoldOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class IconsProviderModule {
}
