import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FlairsComponent } from './components/flairs/flairs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlairsComponent, NavmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Conchord';
}
