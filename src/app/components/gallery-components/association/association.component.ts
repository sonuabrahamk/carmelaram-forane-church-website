import { Component, OnInit } from '@angular/core';
import { IAlbums, IGallery } from '../../interfaces/IGallery';
import { galleryData } from '../../constants/gallery-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css'],
})
export class AssociationComponent implements OnInit {
  associationID: string | any;
  galleryData: IGallery[] = galleryData;
  albumsData: IAlbums[] | any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.associationID = this.route.snapshot.paramMap.get('association');
    for (let data of this.galleryData) {
      if (data.associationName === this.associationID) {
        this.albumsData = data.albums;
      }
    }
  }
}
