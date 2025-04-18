import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
