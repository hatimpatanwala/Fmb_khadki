import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, UserRoutingModule,MatTableModule],
})
export class UserModule {}
