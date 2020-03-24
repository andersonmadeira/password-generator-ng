import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() min = 1;
  @Input() max = 100;
  @Input() value = 20;
  @Output() onChange: EventEmitter<number>;

  constructor() {
    this.onChange = new EventEmitter<number>();
  }

  onValueChange(event): void {
    const newValue = Number(event.target.value);
    this.onChange.next(newValue);
  }

}
