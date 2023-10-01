import { Component } from '@angular/core';
import { UserModel } from 'src/app/modules/user/models/UserModel';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  userData: UserModel;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userData = this.userService.getUserData();
  }
}
