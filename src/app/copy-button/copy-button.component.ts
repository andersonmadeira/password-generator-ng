import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss']
})
export class CopyButtonComponent implements OnInit {
  @Input() text: string;
  @Input() label: string = 'copy'

  constructor() { }

  ngOnInit(): void {
  }

  copyToClipboard() {
    const inputElem = document.createElement('input');
    inputElem.value = this.text;
    document.body.appendChild(inputElem);

    inputElem.focus();
    inputElem.select();

    document.execCommand('copy');

    document.body.removeChild(inputElem);
  }

}
