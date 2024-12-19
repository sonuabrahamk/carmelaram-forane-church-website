import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DioceseComponent } from './pages/diocese/diocese.component';
import { ParishComponent } from './pages/parish/parish.component';
import { CarmelMercyHomeComponent } from './pages/carmel-mercy-home/carmel-mercy-home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { EventsComponent } from './pages/events/events.component';
import { AssociationComponent } from './components/gallery-components/association/association.component';
import { PhotosComponent } from './components/gallery-components/photos/photos.component';
import { FlosCarmeliListComponent } from './pages/flos-carmeli/flos-carmeli.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'diocese', component: DioceseComponent },
  { path: 'parish', component: ParishComponent },
  { path: 'carmel-mercy-home', component: CarmelMercyHomeComponent },
  { path: 'flos-carmeli', component: FlosCarmeliListComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'upcoming-events', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:association', component: AssociationComponent },
  { path: 'gallery/:association/:album', component: PhotosComponent },

  // Catch-all wildcard route for undefined routes
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
