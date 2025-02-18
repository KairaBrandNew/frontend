// shop-categories.component.ts
import { isPlatformBrowser } from '@angular/common';
import { Component, effect, ElementRef, Inject, input, Input, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.css'],
  imports: [MatIconModule, MatButtonModule],
})
export class ShopCategoriesComponent {
  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;
  @Input() categories = signal<any[]>([]);
      // @Input() categories: ItemSlideModel[] = [];

  topCategoryItems = signal<any[]>([]);

  

  intervalId!: NodeJS.Timeout;
  isBrowser = signal(false);  // a signal to store if platform is browser
  currentSlide = signal(0);  // Track the current slide using signal

  constructor(private router: Router, @Inject(PLATFORM_ID) platformId: object) { 
    this.isBrowser.set(isPlatformBrowser(platformId));  // save isPlatformBrowser in signal
    if (this.isBrowser()) {
      this.autoScrollCarousel()
    }
  }

  // categories = signal([
  //   { name: 'T-shirts', imageUrl: '../../../../assets/images/Round Neck.jpg' },
  //   {
  //     name: 'Artisan Crafted',
  //     imageUrl: '../../../assets/images/Artisan Crafted.webp',
  //   },
  //   {
  //     name: 'Heritage Classics',
  //     imageUrl: '../../../assets/images/Heritage Classics.webp',
  //   },
  //   {
  //     name: 'Weekend Collections',
  //     imageUrl: '../../../assets/images/weekend-collections.webp',
  //   },
  //   { name: 'T-shirts', imageUrl: '../../../../assets/images/Round Neck.jpg' },
  //   {
  //     name: 'Artisan Crafted',
  //     imageUrl: '../../../assets/images/Artisan Crafted.webp',
  //   },
  //   {
  //     name: 'Heritage Classics',
  //     imageUrl: '../../../assets/images/Heritage Classics.webp',
  //   },
  //   {
  //     name: 'Weekend Collections',
  //     imageUrl: '../../../assets/images/weekend-collections.webp',
  //   },
  //   { name: 'T-shirts', imageUrl: '../../../../assets/images/Round Neck.jpg' },
  //   {
  //     name: 'Artisan Crafted',
  //     imageUrl: '../../../assets/images/Artisan Crafted.webp',
  //   },
  //   {
  //     name: 'Heritage Classics',
  //     imageUrl: '../../../assets/images/Heritage Classics.webp',
  //   },
  //   {
  //     name: 'Weekend Collections',
  //     imageUrl: '../../../assets/images/weekend-collections.webp',
  //   },
  //   { name: 'T-shirts', imageUrl: '../../../../assets/images/Round Neck.jpg' },
  //   {
  //     name: 'Artisan Crafted',
  //     imageUrl: '../../../assets/images/Artisan Crafted.webp',
  //   },
  //   {
  //     name: 'Heritage Classics',
  //     imageUrl: '../../../assets/images/Heritage Classics.webp',
  //   },
  //   {
  //     name: 'Weekend Collections',
  //     imageUrl: '../../../assets/images/weekend-collections.webp',
  //   },
  //   // Add more category items here
  // ]);

  scrollCarousel(direction: number): void {
    const container = this.carouselContainer.nativeElement;
    const scrollAmount = container.offsetWidth / 1; // Adjust scroll amount based on visible items
    container.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth',
    });
  }


  autoScrollCarousel(): void {
    // Auto transition effect using signals
    effect(() => {
      this.intervalId = setInterval(() => {
        this.scrollCarousel(1);  // Move to the next slide
      }, 3000);

      return () => clearInterval(this.intervalId); // Cleanup when the component is destroyed
    });
  }

  // Handle manual click on carousel (optional)
  onManualCarouselClick(): void {
    clearInterval(this.intervalId)
  }


  navigateToCategoryItem(): void {
    this.router.navigate(['/product-list', { id: '12' }]);
  }
}
