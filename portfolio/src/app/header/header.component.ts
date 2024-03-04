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
      this.setTheme("light");
    }
  }

  setTheme(newTheme: string) {
    if (newTheme === 'light') {
      newTheme = 'dark';
    } else {
      newTheme = 'light';
    }

    this.theme = newTheme;
    document.documentElement.className = newTheme;
  }
}
