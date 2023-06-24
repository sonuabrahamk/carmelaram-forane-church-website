import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LitergyComponent } from './components/litergy/litergy.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { CarouselComponent } from './components/home-components/carousel/carousel.component';
import { UpcomingEventsComponent } from './components/home-components/upcoming-events/upcoming-events.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LitergyComponent,
    ScrollerComponent,
    CarouselComponent,
    UpcomingEventsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbDropdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
