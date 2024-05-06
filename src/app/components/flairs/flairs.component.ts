import { Component } from '@angular/core';
import { Profiles } from '../../api/profiles';

@Component({
  selector: 'app-flairs',
  standalone: true,
  imports: [],
  templateUrl: './flairs.component.html',
  styleUrl: './flairs.component.scss',
})
export class FlairsComponent {
  profile: Profiles = {
    url: '/assets/users/images/avatar.jpg',
    alt: this.fetchImage('/assets/users/images'), // found in |> /public ?? /resources
  };

  fetchImage(url: string) {
    return url;
  }
}
