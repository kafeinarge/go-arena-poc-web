import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '@kafein/data';
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

  allPosts(): Observable<Array<PostModel>> {
    return this.get<Array<PostModel>>('all')
      .pipe(
        catchError(err => ErrorHandlingUtils.handle(err)),
      );
  }

  deleteOnePost(productId: string): Observable<null> {
    return this.delete<null>(`${ productId }`)
      .pipe(
        catchError(err => ErrorHandlingUtils.handle(err)),
      );
  }

  savePost(productModel: PostModel): Observable<PostModel> {
    return this.post<PostModel>('', productModel)
      .pipe(
        catchError(err => ErrorHandlingUtils.handle(err)),
      );
  }

  updatePost(productModel: PostModel): Observable<PostModel> {
    return this.put<PostModel>(`${ productModel.id }`, productModel)
      .pipe(
        catchError(err => ErrorHandlingUtils.handle(err)),
      );
  }
}
