import { Component, inject, Input } from '@angular/core';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

export interface IMenuItem {
  theme: TMenuItemTheme;
  icon: TIcon;
  title: string;
  bgUrl: string;
  url: string;
}

type TIcon = 'briefcase' |
  'chevron' |
  'clock' |
  'globe2' |
  'info-circle' |
  'map' |
  'mic' |
  'people' |
  'person' |
  'shop-window';
type TMenuItemTheme = 'dark' | 'light';

@Component({
  selector: 'app-menu-item',
  imports: [
    NgOptimizedImage,
    NgClass,
    NgStyle,

  ],
  templateUrl: './menu-item.component.html',
  styles: `
    :host {
      display: block;
      height: 100%;
    }

    .dark {
      background-color: var(--darkprimary);

      .icon {
        background-color: var(--accent);
      }
    }

    .light {
      background-color: var(--accent);

      .icon {
        background-color: var(--darkprimary);
      }
    }
  `,
})
export class MenuItemComponent {
  @Input() item: IMenuItem;

  private readonly router: Router = inject(Router);

  onClick(url: string): void {
    this.router.navigateByUrl(url).then();
  }
}

