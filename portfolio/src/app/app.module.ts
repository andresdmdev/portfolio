import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './home/profile/profile.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './header/header-desktop/header-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
