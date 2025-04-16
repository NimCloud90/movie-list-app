import { Component } from '@angular/core';

import { Input } from "./input-bars/input-bars.component";
import { ActionService } from './action.service';
import { FormModel } from './form.model';

@Component({
  selector: 'app-root',
  imports: [Input],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
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
