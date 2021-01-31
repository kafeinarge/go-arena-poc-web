import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApprovalEnum, PaginationModel, PostModel } from '@kafein/data';
import { ErrorHandlingUtils } from '@kafein/utils';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable()
export class WallApiService extends BaseService {
  page = 0;
  size = 10;

  getHttpParams(): HttpParams {
    return new HttpParams();
  }

  getServiceName(): string {
    return 'wall-service';
  }

  allPostsPageable(): Observable<PaginationModel<Array<PostModel>>> {
    return this.get<PaginationModel<Array<PostModel>>>(`all?size=${this.size}&page=${this.page}`)
      .pipe(
        catchError(err => ErrorHandlingUtils.handle(err, this.notificationService)),
      );
  }

  deleteOnePost(productId: string): Observable<null> {
    return this.delete<null>(`${ productId }`)
      .pipe(
        catchError(err => ErrorHandlingUtils.handle(err, this.notificationService)),
      );
  }

  savePost(productModel: PostModel): Observable<PostModel> {
    return this.post<PostModel>('', productModel)
      .pipe(
        catchError(err => ErrorHandlingUtils.handle(err, this.notificationService)),
      );
  }

  updatePost(productModel: PostModel): Observable<PostModel> {
    return this.put<PostModel>(`${ productModel.id }`, productModel)
      .pipe(
        catchError(err => ErrorHandlingUtils.handle(err, this.notificationService)),
      );
  }

  postApproval(postId: string, approvalType: ApprovalEnum): Observable<PostModel> {
    return this.put<PostModel>(`${ postId }/approval/${ approvalType }`);
  }
}
