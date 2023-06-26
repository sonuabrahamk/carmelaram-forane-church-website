import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DioceseComponent } from './pages/diocese/diocese.component';
import { ParishComponent } from './pages/parish/parish.component';
import { CarmelMercyHomeComponent } from './pages/carmel-mercy-home/carmel-mercy-home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'diocese', component: DioceseComponent },
  { path: 'parish', component: ParishComponent },
  { path: 'carmel-mercy-home', component: CarmelMercyHomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'upcoming-events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
