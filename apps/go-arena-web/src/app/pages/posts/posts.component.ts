import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaginationModel, PostModel } from '@kafein/data';
import { WallFacadeService } from '@kafein/services';

@Component({
  selector: 'kafein-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: PaginationModel<Array<PostModel>>;

  constructor(private wallFacadeService: WallFacadeService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.wallFacadeService.allPostsPageable().subscribe(allPosts => this.posts = allPosts);
  }
}
