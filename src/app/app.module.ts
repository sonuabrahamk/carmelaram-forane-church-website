import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FlosCarmeliComponent } from './components/home-components/flos-carmeli/flos-carmeli.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ParishComponent } from './pages/parish/parish.component';
import { DioceseComponent } from './pages/diocese/diocese.component';
import { CarmelMercyHomeComponent } from './pages/carmel-mercy-home/carmel-mercy-home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProfileCardsComponent } from './components/parish-components/profile-cards/profile-cards.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { EventsComponent } from './pages/events/events.component';
import { EnquiryComponent } from './components/home-components/enquiry/enquiry.component';
import { HomeGalleryComponent } from './components/home-components/home-gallery/home-gallery.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AnnouncementContentComponent } from './components/announcement-page/announcement-content/announcement-content.component';

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
    FlosCarmeliComponent,
    ParishComponent,
    DioceseComponent,
    CarmelMercyHomeComponent,
    GalleryComponent,
    ProfileCardsComponent,
    AnnouncementsComponent,
    EventsComponent,
    EnquiryComponent,
    HomeGalleryComponent,
    AnnouncementContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
