import { Component, Input } from '@angular/core';
import { ProjectCardInfo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() projectInfo: ProjectCardInfo = {
    name: "",
    description: "",
    keyPoints: [""],
    images: [""],
    stack: [
      {
        name: "",
        images: [""],
        styles: ""
      }
    ],
    links: [
      {
        text: "",
        icon: "",
        url: ""
      }
    ]
  };
  @Input() elementPosition: number = 0;
}
