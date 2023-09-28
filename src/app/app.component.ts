import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SplashScreenService } from './components/splash-screen/service/splash-screen.service';
import { slideAnimation } from './components/splash-screen/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fmb-khadki';
  splashVisible: boolean = true;
  constructor(private splashScreenService: SplashScreenService) {}
  ngOnInit(): void {
    this.splashScreenService.getSplashScreen().subscribe((isVisible) => {
      if (!isVisible) {
        setTimeout(() => {
          this.splashVisible = isVisible;
        }, 500);
      }
    });
    setTimeout(() => {
      this.splashScreenService.hide();
    }, 3000);
  }
}
