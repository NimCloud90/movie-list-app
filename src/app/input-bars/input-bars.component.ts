import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-bars',
  styleUrl: './input-bars.component.css',
  templateUrl: './input-bars.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class Input {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      myInput: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const inputValue = this.myForm.get('myInput')?.value;
      console.log(inputValue);
    }
  }
}
