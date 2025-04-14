import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormsModule, NgModel, Validators} from '@angular/forms';
import { ActionService } from '../action.service';
import { FormModel } from '../form.model';
@Component({
  selector: 'app-input-bars',
  styleUrl: './input-bars.component.css',
  templateUrl: './input-bars.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule,],
})
export class Input {

  movieName:string = ''
  movieDes:string = ''

  constructor(private fb: FormBuilder, private actionService: ActionService) {
  }

  onSubmit() {
    let movie:FormModel = {movieName: this.movieName, movieDes: this.movieDes}
    this.actionService.movies.set([movie])
  }

}
