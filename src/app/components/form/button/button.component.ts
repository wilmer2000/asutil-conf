import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './button.component.html',
  styles: `
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `,
})
export class ButtonComponent {

  onClick(): void {
    console.log('Button clicked');
  }

}
