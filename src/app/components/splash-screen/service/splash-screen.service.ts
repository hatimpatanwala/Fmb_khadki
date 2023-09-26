import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SplashScreenService {
  public isSplashScreen = new BehaviorSubject<boolean>(false);
  constructor() {}
  getSplashScreen(): Observable<boolean> {
    return this.isSplashScreen.asObservable();
  }
}
