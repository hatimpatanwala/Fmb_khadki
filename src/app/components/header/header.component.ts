import { Component, Output, Input, EventEmitter } from '@angular/core';
import { HeaderService } from './service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'Dashboard';
  @Input() isToggling: boolean;
  @Output() toggleSideNav = new EventEmitter<void>();
  constructor(private headerService: HeaderService) {
    this.headerService.getTitle().subscribe((title) => {
      this.title = title;
      if (!this.title) {
        this.title = 'Dashboard';
      }
    });
  }
  toggle(): void {
    console.log('toggling');
    this.toggleSideNav.emit();
  }
}
