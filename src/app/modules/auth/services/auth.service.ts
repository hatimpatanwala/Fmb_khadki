import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/UserModel';
import { UserService } from '../../user/services/user.service';
import { UserModel } from '../../user/models/UserModel';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor(private userService: UserService) {}
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
  async verifyOtp(data: { its: string; otp: string }): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (data.its === '40401133' && data.otp === '000000') {
        resolve(true);
      } else {
        reject('Invalid Otp');
      }
    });
  }
  setUserData(user: UserModel) {
    // this.userService.setUserData(user);
  }
  authInit() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
    }
  }
}
