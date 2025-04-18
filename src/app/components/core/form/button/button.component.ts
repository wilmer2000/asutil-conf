import { Component, input, output } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgOptimizedImage,
    NgClass,
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
  theme = input<'default' | 'primary'>('default');
  click = output<void>();

  onClick(): void {
    this.click.emit();
  }

}
