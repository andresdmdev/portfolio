import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  @Input() email = "";
  isCopy: boolean = false;

  copyEmail(text: string, event: Event) {

    if (!this.isCopy) {
      if (!navigator.clipboard) {
        // Not suported
        return
      }

      navigator.clipboard.writeText(text)

      this.isCopy = true;

      setTimeout(() => {
        this.isCopy = false;
      }, 1500);
    }
  }
}
