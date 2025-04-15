import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-base',
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './base.component.html',
  styles: ``
})
export class BaseComponent {

}
