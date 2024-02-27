import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentLanguage')) {
      const currentLanguage = JSON.parse(localStorage.getItem('currentLanguage')!) as string;
      this.translocoService.setActiveLang(currentLanguage === "Español" ? "es" : "en");
    }
  }
}
