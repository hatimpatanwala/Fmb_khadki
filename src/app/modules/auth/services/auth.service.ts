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
  /**
   * This method sets the isLoggedIn value
   * @param value
   */
  setIsLoggedIn(value: boolean): void {
    this.isLoggedIn$.next(value);
  }
  /**
   * This method returns the boolean promise to check and send otp
   * @param data
   * @returns Promise<boolean>
   */
  async login(data: { its: string }): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (data.its === '40401133') {
        resolve(true);
      } else {
        reject('Invalid ITS Number ');
      }
    });
  }
  /**
   * This method returns the user data if otp is correct
   * @param data
   * @returns Promise<userData>
   */
  async verifyOtp(data: {
    its: string;
    otp: string;
  }): Promise<{ name: string; itsNo: string }> {
    return new Promise((resolve, reject) => {
      if (data.its === '40401133' && data.otp === '000000') {
        resolve({ name: 'Hatim Patanwala', itsNo: '40401133' });
      } else {
        reject('Invalid Otp');
      }
    });
  }
}
