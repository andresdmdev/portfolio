import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  @Input() theme = '';
  @Output() newTheme = new EventEmitter<string>();

  setNewTheme(theme: string) {
    this.newTheme.emit(theme);
  }
}
