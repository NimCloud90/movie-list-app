import { Component } from '@angular/core';
import { ActionService } from '../action.service';
import { Input } from "../input-bars/input-bars.component";
import { FormModel } from '../form.model';

@Component({
  selector: 'app-main',
  imports: [Input],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private actionService: ActionService) {}
  movies() {
    return this.actionService.movies();
  }
  setSelected(movie: FormModel) {
    this.actionService.selctedMovie.set(movie);
  }
  selectedMovie() {
    return this.actionService.selctedMovie();
  }}

