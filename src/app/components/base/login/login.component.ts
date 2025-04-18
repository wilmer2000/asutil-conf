import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    FormComponent,
  ],
  templateUrl: './login.component.html',
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
})
export class LoginComponent {

}
