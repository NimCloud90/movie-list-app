import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormsModule, NgModel} from '@angular/forms';
import { ActionService } from '../action.service';
import { FormModel } from '../form.model';
import { filter, single } from 'rxjs';
@Component({
  selector: 'app-input-bars',
  styleUrl: './input-bars.component.css',
  templateUrl: './input-bars.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule,],
})
export class Input {
[x: string]: any;

  movieName:string = ''
  movieDes:string = ''
  id!: number;

  constructor(private fb: FormBuilder, private actionService: ActionService) {
  }

  onSubmit() {
    let movie:FormModel = {
      movieName: this.movieName, movieDes: this.movieDes,
    }
    this.actionService.movies.update((current)=> [...current,movie]);
    this.clearForm();
  }
  clearForm() {
    this.movieName = '';
    this.movieDes = '';
  }

  deleteSelected() {
    if (!this.actionService.selctedMovie()) return;
    const remainingMovies = this.actionService
      .movies()
      .filter(
        (singleMovie) => singleMovie !== this.actionService.selctedMovie()
      );
    this.actionService.movies.set(remainingMovies);
  }
  editSelected() {
    this.movieName = this.actionService.selctedMovie()!.movieName;
    this.movieDes = this.actionService.selctedMovie()!.movieDes;
    this.deleteSelected();
  }
  
}
