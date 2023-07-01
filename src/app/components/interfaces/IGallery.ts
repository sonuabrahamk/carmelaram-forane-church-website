export interface IAlbums {
  name: string;
  date: Date;
  thumbnailUrl: string;
  images: string[];
}

export interface IGallery {
  associationName: string;
  logo: string;
  albums: IAlbums[];
}
