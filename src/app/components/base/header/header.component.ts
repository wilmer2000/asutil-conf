import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../../core/form/button/button.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgOptimizedImage,
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  styles: `
    header:after {
      display: block;
      height: var(--header-gradiant-size);
      content: "";
      left: 0;
      position: absolute;
      bottom: calc(var(--header-gradiant-size) * -1);
      width: 100%;
      background: linear-gradient(180deg, rgba(16, 16, 16, 1) 0%, rgba(16, 16, 16, 0) 100%);
    }
  `,
})
export class HeaderComponent {
  @Input() onlyLogo = false;
}
