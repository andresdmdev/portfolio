import { Component } from '@angular/core';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.scss']
})
export class LanguageDropdownComponent {
  readonly LANGUAGES = ['English', 'Español'];
  readonly ICONLANGUAGES = ['us-flag.svg', 'us-flag.svg'];

  currentLanguage: string = this.LANGUAGES[0];
  currentImage: string = this.ICONLANGUAGES[0]
  showOptions: boolean = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
