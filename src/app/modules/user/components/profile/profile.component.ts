import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import moment from 'moment';
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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  paymentHistoryData: PaymentHistoryTable[] = paymentHistoryData;
  tableColumns: string[];
  userDataColumns: string[];
  userData: Array<{ title: string; value: string }> = [
    { title: 'Full Name', value: 'Hatim Patanwala' },
    { title: 'Its No.', value: '40401133' },
    { title: 'Mobile No.', value: '9579035465' },
    { title: 'Thaali Size', value: 'Medium' },
    { title: 'Takhmeem Amount', value: '10000' },
    { title: 'Amount Paid', value: '0' },
    { title: 'Sector No', value: '48' },
    { title: 'Sabeel No', value: 'N1234' },
  ];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.tableColumns = ['date', 'value'];
    this.userDataColumns = ['title', 'value'];
  }
}
