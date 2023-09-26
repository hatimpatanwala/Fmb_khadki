import { Component } from '@angular/core';
import { HeaderService } from './service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string;
  constructor(private headerService: HeaderService) {
    this.headerService.getTitle().subscribe((title) => {
      this.title = title;
    });
  }
}
