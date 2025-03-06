import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCardComponent} from './common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-messenger';
}
