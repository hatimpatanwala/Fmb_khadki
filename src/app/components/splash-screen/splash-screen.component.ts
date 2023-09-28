import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { SplashScreenService } from './service/splash-screen.service';
import {
  fadeInOutAnimation,
  fadeInOutInfiniteAnimation,
  slideAnimation,
} from './animation';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  animations: [slideAnimation, fadeInOutInfiniteAnimation],
})
export class SplashScreenComponent {
  showSplash: boolean = true;
  constructor(private splashScreenService: SplashScreenService) {}
  ngOnInit(): void {
    this.splashScreenService.getSplashScreen().subscribe((isVisible) => {
      this.showSplash = isVisible;
    });
  }
}
