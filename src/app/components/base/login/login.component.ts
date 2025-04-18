import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    LoginFormComponent,
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
