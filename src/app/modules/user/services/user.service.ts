import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';
import { plainToInstance } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: UserModel;
  constructor() {}
  /**
   * This method sets the user data
   * @param data
   */
  setUserData(data: UserModel): void {
    this.userData = plainToInstance(UserModel, data);
  }
  /**
   * This method returns the user data
   * @returns userData
   */
  getUserData(): UserModel {
    return this.userData;
  }
}
