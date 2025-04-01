import { Component } from '@angular/core';
import { ButtonsComponent } from "./buttons/buttons.component";
import { InputBarsComponent } from "./input-bars/input-bars.component";

@Component({
  selector: 'app-root',
  imports: [ButtonsComponent, InputBarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
