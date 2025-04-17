import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../form/button/button.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgOptimizedImage,
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
