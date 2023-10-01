import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from './ui-components/action-button/action-button.component';

@NgModule({
  declarations: [ActionButtonComponent],
  imports: [CommonModule],
  exports: [ActionButtonComponent],
})
export class SharedModule {}
