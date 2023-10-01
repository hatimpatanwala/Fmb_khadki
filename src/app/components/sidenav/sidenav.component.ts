import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/modules/user/models/UserModel';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  userData: UserModel;
  @Input() isToggling: boolean;
  @Output() toggleSideNav = new EventEmitter<void>();
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userData = this.userService.getUserData();
  }
  toggle(): void {
    this.toggleSideNav.emit();
  }
}
