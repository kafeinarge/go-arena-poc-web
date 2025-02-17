import { Injectable } from '@angular/core';
import { ApprovalEnum, PaginationModel, PostModel } from '@kafein/data';
import { Observable } from 'rxjs';
import { WallApiService } from './wall-api.service';

@Injectable()
export class WallFacadeService {
  constructor(private wallApiService: WallApiService) {
  }

  allPostsPageable(pageNumber?: number, pageSize?: number): Observable<PaginationModel<Array<PostModel>>> {
    if (pageNumber) {
      this.wallApiService.pageNo = pageNumber - 1;
    }
    if (pageSize) {
      this.wallApiService.pageSize = pageSize;
    }

    return this.wallApiService.allPostsPageable();
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

  postApproval(postId: string, approvalType: ApprovalEnum): Observable<PostModel> {
    return this.wallApiService.postApproval(postId, approvalType);
  }
}
