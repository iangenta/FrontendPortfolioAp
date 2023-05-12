import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { LogoutComponent } from './components/logout/logout.component';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileHeadComponent } from './components/profile-head/profile-head.component';
import { LicensesAndCertificationsComponent } from './components/licenses-and-certifications/licenses-and-certifications.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    AboutMeComponent,
    LogoutComponent,
    ProfileHeadComponent,
    LicensesAndCertificationsComponent,
    ProjectsComponent,
    HomeComponent,
    
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
