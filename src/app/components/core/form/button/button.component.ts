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
    }
  `,
})
export class ButtonComponent {

  onClick(): void {
    console.log('Button clicked');
  }

}
