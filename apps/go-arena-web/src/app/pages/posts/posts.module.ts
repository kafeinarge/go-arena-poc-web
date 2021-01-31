import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { PostComponent } from '../../components/post/post.component';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NzGridModule,
    NzPaginationModule,
    NzTypographyModule,
    NzButtonModule,
    NzImageModule,
    RouterModule.forChild([
      {
        path: '', component: PostsComponent,
      },
    ]),
    NzPopconfirmModule,
  ],
})
export class PostsModule {
}
