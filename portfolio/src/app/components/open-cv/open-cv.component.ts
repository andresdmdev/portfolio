import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-open-cv',
  templateUrl: './open-cv.component.html',
  styleUrls: ['./open-cv.component.scss']
})
export class OpenCvComponent {
  @Input() title = '';
}
