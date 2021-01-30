import { HttpErrorResponse } from '@angular/common/http';
import { GLOBAL_ERROR_MESSAGE } from '@kafein/data';
import { EMPTY, Observable } from 'rxjs';

export abstract class ErrorHandlingUtils {
  public static handle(err: HttpErrorResponse): Observable<never> {
    if (err.error.status !== 500) {
      alert(err.error.errorMessage);
    } else {
      alert(GLOBAL_ERROR_MESSAGE);
    }
    return EMPTY;
  }
}
