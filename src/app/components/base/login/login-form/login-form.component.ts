import { Component } from '@angular/core';
import { InputComponent } from '../../../core/form/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../core/form/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './login-form.component.html',
  styles: ``,
})
export class LoginFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }
}
