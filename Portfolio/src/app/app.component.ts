import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolBar } from '@angular/material/MatToolBar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
