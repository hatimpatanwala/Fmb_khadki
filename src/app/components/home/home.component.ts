import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isLoggedIn$: Observable<boolean>;
  // isLoggedIn: boolean;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.isLoggedIn$ = this.authService.getIsLoggedIn();
  }
}
