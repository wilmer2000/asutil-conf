import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

type TInputType = 'text' | 'email' | 'password';

@Component({
  selector: 'app-input',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  styles: ``,
})
export class InputComponent {
  form = input<FormGroup>();
  label = input<string>();
  id = input<string>();
  type = input<TInputType>('text');
}
