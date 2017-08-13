import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { SkillComponent } from './Skill/skill.component';

import {routing} from './app.routing';
@NgModule({
  declarations: [
    AppComponent
   ,NavbarComponent
   ,HomeComponent
   ,AboutComponent
   ,SkillComponent
  ],
  imports: [
     BrowserModule
    ,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
