import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent {
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() class: string;
  @Output() btnClick = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {
    console.log(this.class);
  }
  onClick() {
    this.btnClick.emit();
  }
}
