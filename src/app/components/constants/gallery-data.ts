import { IGallery } from '../interfaces/IGallery';

export const galleryData: IGallery[] = [
  {
    associationName: 'parish',
    logo: 'logo.png',
    albums: [
      {
        name: 'perunaal',
        date: new Date('2022-01-28'),
        thumbnailUrl: 'logo.png',
        images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
      },
    ],
  },
  {
    associationName: 'youth',
    logo: 'logo.png',
    albums: [
      {
        name: 'hallelujah',
        date: new Date('2022-01-28'),
        thumbnailUrl: 'logo.png',
        images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
      },
    ],
  },
];
