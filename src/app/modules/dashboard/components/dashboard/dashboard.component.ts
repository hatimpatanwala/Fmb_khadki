import { Component } from '@angular/core';
import { UserModel } from 'src/app/modules/user/models/UserModel';
import { UserService } from 'src/app/modules/user/services/user.service';
import moment from 'moment';
import { MenuInterface } from 'src/app/modules/menu/components/menu/menu.component';
interface PaymentHistoryTable {
  value: string;
  date: string;
}
const paymentHistoryData: PaymentHistoryTable[] = [
  { date: moment().format('DD/MM/YYYY'), value: '1100' },
  { date: moment().subtract(1, 'months').format('DD/MM/YYYY'), value: '1100' },
  { date: moment().subtract(2, 'months').format('DD/MM/YYYY'), value: '1100' },
  { date: moment().subtract(3, 'months').format('DD/MM/YYYY'), value: '1100' },
  { date: moment().subtract(4, 'months').format('DD/MM/YYYY'), value: '1100' },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userData: UserModel;
  paymentHistoryData: PaymentHistoryTable[] = paymentHistoryData;
  tableColumns: string[];
  menuData: MenuInterface;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userData = this.userService.getUserData();
    this.tableColumns = ['date', 'value'];
    this.menuData = {
      menu: 'rice dal chawal',
      menuDate: moment().format('MM/DD/YYYY'),
    };
  }
}
