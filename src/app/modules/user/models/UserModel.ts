export class UserModel {
  firstName: string = 'Hatim';
  lastName: string = 'Patanwala';
  token: string = '123';
  itsId: string = '40401133';
  mobileNumber: '9579035465';
  thaaliSize: 'lg' | 'md' | 'sm' = 'md';
  role: 0 | 1;
  /**
   * This method returns the full name of user
   * @returns string
   */
  getUserFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  /**
   * This method returns the its id of the user
   * @returns string
   */
  getItsId(): string {
    return this.itsId;
  }
  /**
   * This method returns the mobile number of the user
   * @returns string
   */
  getMobileNumber(): string {
    return this.mobileNumber;
  }
  /**
   * This method returns the thaali size
   * @returns string
   */
  getThaaliSize(): string {
    return this.thaaliSize;
  }
}
