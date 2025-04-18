import { Component, input, output } from '@angular/core';
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
  label = input<string>();
  icon = input<string>();
  click = output<void>();

  onClick(): void {
    this.click.emit();
  }

}
