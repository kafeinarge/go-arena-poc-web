import { Component, Input } from '@angular/core';
import { PostModel } from '@kafein/data';

@Component({
  selector: 'kafein-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent  {

  @Input() post: PostModel;
}
