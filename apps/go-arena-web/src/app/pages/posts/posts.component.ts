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

  constructor(private wallFacadeService: WallFacadeService) {
  }

  ngOnInit() {
    this.wallFacadeService.allPostsPageable().subscribe(allPosts => this.posts = allPosts);
  }

  pageIndexChange(pageNumber: number): void {
    this.wallFacadeService.allPostsPageable(pageNumber).subscribe(allPosts => this.posts = allPosts);
  }
}
