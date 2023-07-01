import { Component, OnInit } from '@angular/core';
import { galleryData } from 'src/app/components/constants/gallery-data';
import { IGallery } from '../../components/interfaces/IGallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  galleryData: IGallery[] = galleryData;
}
