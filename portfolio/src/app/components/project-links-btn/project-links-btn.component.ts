import { Component, Input } from '@angular/core';
import { Link } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-project-links-btn',
  templateUrl: './project-links-btn.component.html',
  styleUrls: ['./project-links-btn.component.scss']
})
export class ProjectLinksBtnComponent {
  @Input() links: Link[] = [{
    text: "",
    url: "",
    icon: ""
  }];
}
