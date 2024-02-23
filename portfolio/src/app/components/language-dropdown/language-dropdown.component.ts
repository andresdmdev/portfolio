import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.scss']
})
export class LanguageDropdownComponent implements OnInit {
  readonly LANGUAGES = [
    {
      name: 'English',
      url: 'us-flag.svg'
    },
    {
      name: 'Español',
      url: 'us-flag.svg'
    },
  ];

  currentLanguage: string = this.LANGUAGES[0].name;
  currentImage: string = this.LANGUAGES[0].url;
  showOptions: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem('currentLanguage')) {
      this.currentLanguage = JSON.parse(localStorage.getItem('currentLanguage')!) as string;
    }
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  selectLanguage() {

    const language = this.nextlanguage()

    if (this.currentLanguage !== language) {
      this.currentLanguage = language;
      localStorage.setItem('currentLanguage', JSON.stringify(language));
    }
  }

  getUrlImage(): string {
    const url = this.LANGUAGES[0].name == "English" ? this.LANGUAGES[1].url : this.LANGUAGES[0].url;
    return `../../../assets/images/${url}`;
  }

  nextlanguage() {
    return this.LANGUAGES.filter(x => x.name != this.currentLanguage)[0].name;
  }
}
