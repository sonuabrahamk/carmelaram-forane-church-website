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
        images: ['img1.jpg'],
      },
      {
        name: 'Annual Feast - 2024',
        date: new Date('2023-05-28'),
        thumbnailUrl: '/parish/Annual Feast - 2024/img1.jpg',
        images: ['img1.jpg'],
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
      {
        name: 'Oath Taking Ceremony',
        date: new Date('2023-07-23'),
        thumbnailUrl: '/Mount Carmel Youth/Oath Taking Ceremony/IMG_2.jpg',
        images: ['IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpeg'],
      },
      {
        name: 'Gloria 2023',
        date: new Date('2023-12-10'),
        thumbnailUrl: '/Mount Carmel Youth/Gloria 2023/img1.jpg',
        images: [
          'img1.jpg',
          'img2.jpg',
          'img3.jpg',
          'img4.jpg',
          'img5.jpg',
          'img6.jpg',
          'img7.jpg',
        ],
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
      {
        name: 'Christmas Tree',
        date: new Date('2023-12-25'),
        thumbnailUrl: '/catechism/Christmas Tree/img1.jpeg',
        images: ['img1.jpeg'],
      },
    ],
  },
  {
    associationName: 'mathruvedhi',
    logo: 'logo.png',
    albums: [
      {
        name: 'Gabriella',
        date: new Date('2023-12-17'),
        thumbnailUrl: '/mathruvedhi/Gabriella/img1.jpeg',
        images: ['img1.jpeg'],
      },
      {
        name: 'Visiting Aged Mothers',
        date: new Date('2023-12-17'),
        thumbnailUrl: '/mathruvedhi/Visiting Aged Mothers/img1.jpeg',
        images: ['img1.jpeg'],
      },
    ],
  },
];
