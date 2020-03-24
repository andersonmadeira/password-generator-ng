import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() checked: boolean = false;
  @Input() label: string;
  @Output() onChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCheckChange(event): void {
    this.onChange.emit(event.currentTarget.checked);
  }

}
