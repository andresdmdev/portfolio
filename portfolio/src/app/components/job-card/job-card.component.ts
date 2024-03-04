import { Component, Input } from '@angular/core';
import { JobCardInfo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() jobInfo: JobCardInfo = {
    company: "",
    position: "",
    date: "",
    description: [""]
  };
  @Input() elementPosition: number = 0;
}
