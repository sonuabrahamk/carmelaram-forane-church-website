import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 5000,
    autoplay: true,
    pullDrag: true,
    mouseDrag: true,
    touchDrag: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
