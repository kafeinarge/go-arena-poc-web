import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PostComponent } from '../../components/post/post.component';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '', component: PostsComponent,
      },
    ]),
  ],
})
export class PostsModule {
}
