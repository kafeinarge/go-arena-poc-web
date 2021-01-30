import { Component, OnInit } from '@angular/core';
import { PostModel } from '@kafein/data'
import { WallFacadeService } from '@kafein/services';

@Component({
  selector: 'kafein-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Array<PostModel>;

  constructor(private wallFacadeService: WallFacadeService) {
  }

  ngOnInit() {
    this.wallFacadeService.allPosts().subscribe(allPosts => this.posts = allPosts);
  }
}
