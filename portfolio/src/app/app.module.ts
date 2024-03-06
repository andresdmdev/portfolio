import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ExperienceComponent } from './home/experience/experience.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { ProyectsComponent } from './home/projects/proyects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectCardCarouselComponent } from './components/project-card-carousel/project-card-carousel.component';
import { SkillsComponent } from './home/skills/skills.component';
import { EducationComponent } from './home/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    LanguageDropdownComponent,
    OpenCvComponent,
    EmailComponent,
    ExperienceComponent,
    JobCardComponent,
    ProyectsComponent,
    ProjectCardComponent,
    ProjectCardCarouselComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
