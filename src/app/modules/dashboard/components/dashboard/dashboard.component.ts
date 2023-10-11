import { Component } from '@angular/core';
import { UserModel } from 'src/app/modules/user/models/UserModel';
import { UserService } from 'src/app/modules/user/services/user.service';
import moment from 'moment';
import { MenuInterface } from 'src/app/modules/menu/components/menu/menu.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userData: UserModel;
  menuData: MenuInterface;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userData = this.userService.getUserData();
    this.menuData = {
      menu: 'rice dal chawal',
      menuDate: moment().format('MM/DD/YYYY'),
    };
  }
}
