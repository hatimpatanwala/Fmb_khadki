import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MenuComponent, MenuCardComponent],
  imports: [CommonModule, MenuRoutingModule, MatSlideToggleModule,MatDividerModule,MatIconModule],
  exports: [MenuCardComponent],
})
export class MenuModule {}
