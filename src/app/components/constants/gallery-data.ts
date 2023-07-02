import { IGallery } from '../interfaces/IGallery';

export const galleryData: IGallery[] = [
  {
    associationName: 'parish',
    logo: 'logo.png',
    albums: [
      {
        name: 'Feast 2023',
        date: new Date('2022-01-28'),
        thumbnailUrl: '/parish/Feast 2023/img1.jpg',
        images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
      },
      {
        name: 'Feast of Corpus Chirsti',
        date: new Date('2023-06-29'),
        thumbnailUrl: '/parish/Feast of Corpus Chirsti/img1.jpg',
        images: ['corpuschristi.jpg'],
      },
      {
        name: 'Ezuthiniruthaal May 2023',
        date: new Date('2023-05-28'),
        thumbnailUrl: '/parish/Ezuthiniruthaal May 2023/img1.jpg',
        images: ['corpuschristi.jpg'],
      },
    ],
  },
  {
    associationName: 'Mount Carmel Youth',
    logo: 'logo.png',
    albums: [
      {
        name: 'Hallelujah 2022',
        date: new Date('2022-10-02'),
        thumbnailUrl: '/Mount Carmel Youth/Hallelujah 2022/IMG_2745.jpg',
        images: ['IMG_2781.jpg', 'IMG_2745.jpg', 'IMG_2837.jpg'],
      },
    ],
  },
  {
    associationName: 'catechism',
    logo: 'logo.png',
    albums: [
      {
        name: 'Teacher_s Meeting',
        date: new Date('2022-06-01'),
        thumbnailUrl: '/catechism/Teacher_s Meeting/img1.jpeg',
        images: ['img1.jpeg', 'img2.jpeg', 'img3.jpeg'],
      },
      {
        name: 'Moments',
        date: new Date('2022-06-01'),
        thumbnailUrl: '/catechism/Moments/img1.jpg',
        images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
      },
    ],
  },
];
