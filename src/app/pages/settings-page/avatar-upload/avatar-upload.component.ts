import {Component, signal} from '@angular/core';
import {SvgIconsComponent} from '../../../common-ui/svg-icons/svg-icons.component';

@Component({
  selector: 'app-avatar-upload',
  imports: [
    SvgIconsComponent
  ],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss'
})
export class AvatarUploadComponent {

  preview = signal<string>('/assets/imgs/noavatar.png')

  fileBrowserHandler(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];

    if (!file || !file.type.match('image')) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = event => {
      this.preview.set(event.target?.result?.toString() ?? '')
    }

    reader.readAsDataURL(file);

  }




}
