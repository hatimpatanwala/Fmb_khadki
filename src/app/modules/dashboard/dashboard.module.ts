import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MenuModule } from '../menu/menu.module';
@NgModule({
  declarations: [DashboardComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSlideToggleModule,
    MatTableModule,
    MenuModule,
  ],
})
export class DashboardModule {}
