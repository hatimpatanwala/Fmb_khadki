import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/UserModel';
import { UserService } from '../../user/services/user.service';
import { UserModel } from '../../user/models/UserModel';
import { SplashScreenService } from 'src/app/components/splash-screen/service/splash-screen.service';
import { instanceToPlain } from 'class-transformer';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private token: string;
  constructor(
    private userService: UserService,
    private splashScreenService: SplashScreenService
  ) {}
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
  async verifyOtp(data: { its: string; otp: string }): Promise<any> {
    return new Promise((resolve, reject) => {
      if (data.its === '40401133' && data.otp === '000000') {
        const userData = new UserModel();
        const plainUserData = instanceToPlain(userData);
        resolve(plainUserData);
      } else {
        reject('Invalid Otp');
      }
    });
  }
  setUserData(user: UserModel, setOnLocalStorage: boolean = false) {
    this.userService.setUserData(user);
    this.setToken(user.token);
    if (setOnLocalStorage) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(user.token));
    }
    this.isLoggedIn$.next(true);
  }
  setToken(token: string) {
    this.token = token;
  }
  authInit() {
    const token = JSON.parse(localStorage.getItem('token'));
    const userData = JSON.parse(localStorage.getItem('user'));
    if (token && userData) {
      this.setUserData(userData);
    } else {
      this.logout();
    }
    setTimeout(() => {
      this.splashScreenService.hide();
    }, 2000);
  }
  logout() {
    localStorage.clear();
    this.isLoggedIn$.next(false);
  }
}
