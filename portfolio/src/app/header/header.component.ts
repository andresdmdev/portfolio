import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme = "light";

  ngOnInit(): void {
    const isDarkPreferedTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkPreferedTheme) {
      this.setTheme("dark");
    }
  }

  setTheme(theme: string) {

    if (theme === 'light')
      theme = 'dark';
    else
      theme = 'light';

    this.theme = theme;
    document.documentElement.className = theme;
  }
}
