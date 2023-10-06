import moment from 'moment';
export class MenuModel {
  menu: string;
  menuDate: string;
  getDay(format: string): string {
    return moment(this.menuDate).format(format);
  }
  getDate(format: string): string {
    return moment(this.menuDate).format(format);
  }
}
