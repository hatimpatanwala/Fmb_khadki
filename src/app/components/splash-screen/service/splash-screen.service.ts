import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SplashScreenService {
  public isSplashScreen = new BehaviorSubject<boolean>(true);
  constructor() {}
  getSplashScreen(): Observable<boolean> {
    return this.isSplashScreen.asObservable();
  }
  hide(): void {
    this.isSplashScreen.next(false);
  }
}
