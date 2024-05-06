import { Component, effect, signal } from '@angular/core';
import { Navigator } from './navigator';

@Component({
  selector: 'app-navmenus',
  standalone: true,
  imports: [],
  templateUrl: './navmenus.component.html',
  styleUrl: './navmenus.component.scss'
})
export class NavmenusComponent {
  navigator: Navigator = {
    home: "Home",
    about: "About",
    contact: "Contact",
    info: "Information"
  }
}
