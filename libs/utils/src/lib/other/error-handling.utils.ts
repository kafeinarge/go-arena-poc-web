import { HttpErrorResponse } from '@angular/common/http';
import { GLOBAL_ERROR_MESSAGE } from '@kafein/data';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EMPTY, Observable } from 'rxjs';

export abstract class ErrorHandlingUtils {
  public static handle(err: HttpErrorResponse, notificationService: NzNotificationService): Observable<never> {
    if (err.error.status !== 500) {
      notificationService.error(null, err.error.errorMessage);
    } else {
      notificationService.error(null, GLOBAL_ERROR_MESSAGE);
    }
    return EMPTY;
  }
}
