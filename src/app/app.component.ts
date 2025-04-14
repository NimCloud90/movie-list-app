import { Component } from '@angular/core';

import { Input } from "./input-bars/input-bars.component";
import { ActionService } from './action.service';

@Component({
  selector: 'app-root',
  imports: [Input],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';

  constructor(public actionService:ActionService){}
}
