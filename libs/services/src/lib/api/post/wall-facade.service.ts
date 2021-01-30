import { Injectable } from '@angular/core';
import { PostModel } from '@kafein/data';
import { Observable } from 'rxjs';
import { WallApiService } from './wall-api.service';

@Injectable()
export class WallFacadeService {
  constructor(private wallApiService: WallApiService) {
  }

  allPosts(): Observable<Array<PostModel>> {
    return this.wallApiService.allPosts();
  }

  deleteOnePost(productId: string): Observable<null> {
    return this.wallApiService.deleteOnePost(productId);
  }

  savePost(productDto: PostModel) {
    return this.wallApiService.savePost(productDto);
  }

  updatePost(productDto: PostModel) {
    return this.wallApiService.updatePost(productDto);
  }
}
