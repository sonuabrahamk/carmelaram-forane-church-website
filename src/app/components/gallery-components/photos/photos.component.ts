import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IAlbums, IGallery } from '../../interfaces/IGallery';
import { galleryData } from '../../constants/gallery-data';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  associationID: string | any;
  albumId: string | any;
  galleryData: IGallery[] = galleryData;
  albumsData: IAlbums[] | any;
  imagesData: string[] = [];
  carId: number = 0;
  @Input() imageId: string | any;
  @ViewChild('owlCar', { static: true }) owlCar: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.associationID = this.route.snapshot.paramMap.get('association');
    this.albumId = this.route.snapshot.paramMap.get('album');
    for (let data of this.galleryData) {
      if (data.associationName === this.associationID) {
        for (let album of data.albums) {
          if (album.name === this.albumId) {
            this.imagesData = album.images;
          }
          break;
        }
      }
      break;
    }
  }

  ngAfterViewInit(): void {
    document.getElementById('overlayView')?.classList.remove('overlay-view');
  }

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: false,
    pullDrag: true,
    mouseDrag: true,
    touchDrag: true,
    startPosition: this.carId,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
    navText: ['PREV', 'NEXT'],
  };

  cancelBtn(): void {
    document.getElementById('overlayView')?.classList.remove('overlay-view');
  }

  galleryView(val: number): void {
    // this.owlCar.to(val);
    this.carId = val;
    document.getElementById('overlayView')?.classList.add('overlay-view');
  }
}
