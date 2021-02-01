import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzElementPatchModule } from 'ng-zorro-antd/core/element-patch';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
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
    NzModalModule,
    RouterModule.forChild([
      {
        path: '', component: PostsComponent,
      },
    ]),
    NzPopconfirmModule,
    NzSkeletonModule,
    NzToolTipModule,
    NzPipesModule,
    NzElementPatchModule,
  ],
})
export class PostsModule {
}
