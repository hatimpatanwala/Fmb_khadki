import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import {environment} from "src/environments/environment"
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private _snackBar: MatSnackBar, private zone: NgZone) {}
  handleError(error: any): void {
    // if(environmen)
    console.error('Error from global error handler', error);
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection;
      console.log(error);
    }
    switch (error?.status) {
    }
  }
}
