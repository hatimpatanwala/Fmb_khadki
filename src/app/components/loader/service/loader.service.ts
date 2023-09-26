import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading = new BehaviorSubject<boolean>(false);
  constructor() {}
  getIsLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
}
