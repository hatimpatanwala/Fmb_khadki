import { Component } from '@angular/core';
export interface MenuInterface {
  menu: string;
  menuDate: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuData: MenuInterface[] = [
    { menu: 'rice dal chawal', menuDate: '10-03-2023' },
    { menu: 'rice dal chawal', menuDate: '10-04-2023' },
    { menu: 'rice dal chawal', menuDate: '10-05-2023' },
    { menu: 'rice dal chawal', menuDate: '10-06-2023' },
    { menu: 'rice dal chawal', menuDate: '10-07-2023' },
  ];
  constructor() {}
}
