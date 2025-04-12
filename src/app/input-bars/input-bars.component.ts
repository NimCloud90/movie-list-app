import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-input-bars',
  styleUrl: './input-bars.component.css',
  templateUrl: './input-bars.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class Input {

  Movies: FormGroup;

  constructor(private fb: FormBuilder, private actionService: ActionService) {
    this.Movies = this.fb.group({
      myInput: ['', Validators.required]
    });
  }
  movies() {
    return this.actionService.Movies()
  }

  onSubmit() {
    if (this.Movies.valid) {
      const inputValue = this.Movies.get('myInput')?.value;
      console.log(inputValue);
    }
  }
}
