import { Component, Input, OnInit } from '@angular/core';
import { JobCardInfo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() jobInfo: JobCardInfo = {
    company: "",
    position: "",
    date: "",
    description: [""]
  };
  @Input() elementPosition: number = 0;

  ngOnInit(): void {
    console.log(this.jobInfo);
    console.log(this.elementPosition);
  }
}
