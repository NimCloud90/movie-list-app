import { Component } from '@angular/core';
import { Buttons } from "./buttons/buttons.component";
import { Input } from "./input-bars/input-bars.component";

@Component({
  selector: 'app-root',
  imports: [Input, Buttons],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
