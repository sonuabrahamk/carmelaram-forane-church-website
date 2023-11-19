import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IGallery } from '../../interfaces/IGallery';
import { galleryData } from '../../constants/gallery-data';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css'],
})
export class HomeGalleryComponent implements OnInit {
  galleryData: IGallery[] = galleryData;
  thumbnails: string[] = [];
  associations: string[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let assoc of this.galleryData) {
      for (let album of assoc.albums) {
        if (album.thumbnailUrl !== '') {
          this.thumbnails.push(album.thumbnailUrl);
          this.associations.push(album.name);
        }
      }
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 200,
    autoplay: true,
    pullDrag: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 3,
      },
    },
  };
}
