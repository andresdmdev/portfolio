import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './home/profile/profile.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './header/header-desktop/header-desktop.component';
import { LanguageDropdownComponent } from './components/language-dropdown/language-dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { OpenCvComponent } from './components/open-cv/open-cv.component';
import { EmailComponent } from './components/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    LanguageDropdownComponent,
    OpenCvComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
