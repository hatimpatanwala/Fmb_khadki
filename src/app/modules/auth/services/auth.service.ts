import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() {}
  /**
   * This method returns the subscribale observable is loggedin
   * @returns Observable<boolean>
   */
  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }
  setIsLoggedIn(value: boolean): void {
    this.isLoggedIn$.next(value);
  }
}
