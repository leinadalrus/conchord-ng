import { Component, effect, signal } from '@angular/core';
import { Navigator } from './navigator';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss'
})
export class NavmenuComponent {
  navigator: Navigator = {
    home: "Home",
    about: "About",
    contact: "Contact",
    info: "Information"
  }
}
