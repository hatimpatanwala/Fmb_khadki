import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { HeaderService } from '../header/service/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isToggling = event.target.innerWidth < 900;
  }
  isLoggedIn$: Observable<boolean>;
  isToggling: boolean = true;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.isToggling = innerWidth < 900;
    this.isLoggedIn$ = this.authService.getIsLoggedIn();
  }
  toggleSideNav() {
    if (this.isToggling) {
      this.sidenav.toggle();
    }
  }
}
