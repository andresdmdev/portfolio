import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss']
})
export class HeaderDesktopComponent {
  @Input() theme = '';
  @Output() newTheme = new EventEmitter<string>();

  setNewTheme(theme: string) {
    this.newTheme.emit(theme);
  }
}
