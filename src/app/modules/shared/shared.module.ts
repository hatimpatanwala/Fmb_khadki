import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from './ui-components/action-button/action-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ActionButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ActionButtonComponent],
})
export class SharedModule {}
