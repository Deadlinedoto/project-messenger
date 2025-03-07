import { Component } from '@angular/core';
import {SvgIconsComponent} from '../svg-icons/svg-icons.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    SvgIconsComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
