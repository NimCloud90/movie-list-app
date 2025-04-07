import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-bars',
  styleUrl: './input-bars.component.css',
  templateUrl: './input-bars.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class Input {}
