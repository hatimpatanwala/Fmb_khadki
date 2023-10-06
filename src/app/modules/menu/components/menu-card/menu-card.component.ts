import { Component, Input } from '@angular/core';
import moment from 'moment';
import { MenuInterface } from '../menu/menu.component';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent {
  @Input() menu: MenuInterface;
  date: string;
  month: string;
  day: string;
  isToday: boolean;
  dayBefore: string;
  today: string;
  constructor() {}
  ngOnInit() {
    console.log(this.menu);
    this.date = moment(this.menu.menuDate).format('DD');
    this.month = moment(this.menu.menuDate).format('MMM');
    this.day = moment(this.menu.menuDate).format('ddd');
    console.log(this.date, this.day, this.month);
    this.isToday =
      moment(this.menu.menuDate).format('DD') === moment().format('DD');
    this.dayBefore = moment(this.menu.menuDate)
      .subtract(1, 'days')
      .format('dddd');
    this.today = moment(this.menu.menuDate).format('dddd');
  }
}
