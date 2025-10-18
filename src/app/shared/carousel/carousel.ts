import { Component, input } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  images = input([
    { url: 'assets/images/carousel/image1.jpg', alt: 'Image 1' },
    { url: 'assets/images/carousel/image2.jpeg', alt: 'Image 2' },
    { url: 'assets/images/carousel/image3.jpg', alt: 'Image 3' },
    { url: 'assets/images/carousel/image4.jpg', alt: 'Image 4' },
  ]);

  currentIndex = signal(0);

  constructor() {
    setInterval(() => {
      const imgs = this.images();
      this.currentIndex.set((this.currentIndex() + 1) % imgs.length);
    }, 5000);
  }
}
