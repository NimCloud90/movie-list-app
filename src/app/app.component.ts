import { Component } from '@angular/core';

import { Input } from "./input-bars/input-bars.component";
import { ActionService } from './action.service';
import { FormModel } from './form.model';
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
