import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, MenuCardComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MenuCardComponent],
})
export class MenuModule {}
