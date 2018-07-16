import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import third-party module
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

import { AppRoutingModule } from './app-routing.module';
import { SkillsService } from './skills.service'; // service
import { AboutmeService } from './aboutme.service'; // service
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './common/slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { MyworksComponent } from './myworks/myworks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SliderComponent,
    ContactComponent,
    MyworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [SkillsService, AboutmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
