import { Component } from '@angular/core';
import { InputComponent } from '../../../core/form/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../core/form/button/button.component';

@Component({
  selector: 'app-form',
  imports: [
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './form.component.html',
  styles: ``,
})
export class FormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  getControl(id: string): FormControl {
    return this.form.get(id) as FormControl;
  }
}
