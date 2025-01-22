/* product-carousel-card.component.ts */
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-carousel-card',
  templateUrl: './product-carousel-card.component.html',
  styleUrls: ['./product-carousel-card.component.css']
})
export class ProductCarouselCardComponent {
  products = [
    {
      name: 'Norwich Loose Fit Joggers',
      price: 1199,
      originalPrice: 2499,
      discount: '1300 OFF',
      image: '../../../../assets/images/latest 1.webp'
    },
    {
      name: 'Classic Hoodie',
      price: 1299,
      originalPrice: 3799,
      discount: '2500 OFF',
      image: '../../../../assets/images/latest 2.webp'
    },
    {
      name: 'Corduroy Textured Shackets',
      price: 1999,
      originalPrice: 3999,
      discount: '2000 OFF',
      image: '../../../../assets/images/latest 4.webp'
    },
    {
      name: 'Zip-up Textured Polo Shirts',
      price: 1299,
      originalPrice: 2499,
      discount: '1200 OFF',
      image: '../../../../assets/images/latest 3.webp'
    },
    {
      name: 'Norwich Loose Fit Joggers',
      price: 1199,
      originalPrice: 2499,
      discount: '1300 OFF',
      image: '../../../../assets/images/latest 1.webp'
    },
    {
      name: 'Classic Hoodie',
      price: 1299,
      originalPrice: 3799,
      discount: '2500 OFF',
      image: '../../../../assets/images/latest 2.webp'
    },
    {
      name: 'Corduroy Textured Shackets',
      price: 1999,
      originalPrice: 3999,
      discount: '2000 OFF',
      image: '../../../../assets/images/latest 4.webp'
    },
    {
      name: 'Zip-up Textured Polo Shirts',
      price: 1299,
      originalPrice: 2499,
      discount: '1200 OFF',
      image: '../../../../assets/images/latest 3.webp'
    },
    {
      name: 'Norwich Loose Fit Joggers',
      price: 1199,
      originalPrice: 2499,
      discount: '1300 OFF',
      image: '../../../../assets/images/latest 1.webp'
    },
    {
      name: 'Classic Hoodie',
      price: 1299,
      originalPrice: 3799,
      discount: '2500 OFF',
      image: '../../../../assets/images/latest 2.webp'
    },
    {
      name: 'Corduroy Textured Shackets',
      price: 1999,
      originalPrice: 3999,
      discount: '2000 OFF',
      image: '../../../../assets/images/latest 4.webp'
    },
    {
      name: 'Zip-up Textured Polo Shirts',
      price: 1299,
      originalPrice: 2499,
      discount: '1200 OFF',
      image: '../../../../assets/images/latest 3.webp'
    }
  ];

  scrollLeft(container: HTMLElement) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(container: HTMLElement) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
