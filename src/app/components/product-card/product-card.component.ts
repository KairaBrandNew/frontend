import {
  Component,
  ElementRef,
  input,
  Input,
  OnInit,
  signal,
  Signal,
  ViewChild,
} from '@angular/core';
import { ProductModel } from '../../models/home.model';
import {
  CartItem,
  CartSidePanelComponent,
} from '../cart-side-panel/cart-side-panel.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

export interface CategoryItem {
  name: string;
  image: string;
  price: number;
  discountedPrice: number;
}

@Component({
  selector: 'app-product-card',
  imports: [CartSidePanelComponent, MatIconModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  constructor(private router: Router) {}

  isCartOpen = signal(false);
  quantity = 1;
  @ViewChild('carouselContainer', { static: true })
  carouselContainer!: ElementRef;
  autoScrollInterval: any;

  product = signal<ProductModel>({
    title:
      'Grey Round Neck Imported Cotton Half Sleeve Premium Designer T-Shirt',
    price: 1549,
    color: 'Grey',
    sizes: ['S', 'M', 'L', 'XL'],
    discountCode: 'RUDHVA10',
    discountDetails: 'Flat 10% off on Purchase Rs. 1,200.00.',
    extraDiscount: 'Extra 5% on Prepaid Order | Hurry up Before Sold Out',
    imageUrl: 'path-to-image',
    taxesIncluded: 'Inclusive of all taxes',
  });

  cartItems = signal<CartItem[]>([
    {
      title: 'Deer Embroidered White Luxury Cotton Shirt',
      image: '../../../../assets/images/Trending Mens Wear 1.JPG',
      color: 'White',
      size: 'S',
      price: 1499.0,
      quantity: 1,
    },
    {
      title:
        'Grey Round Neck Imported Cotton Half Sleeve Premium Designer T-Shirt',
      image: '../../../assets/images/Image 2.jpg',
      color: 'Grey',
      size: 'M',
      price: 1549.0,
      quantity: 1,
    },
    {
      title: 'Deer Embroidered White Luxury Cotton Shirt',
      image: '../../../../assets/images/Trending Mens Wear 1.JPG',
      color: 'White',
      size: 'S',
      price: 1499.0,
      quantity: 1,
    },
    {
      title:
        'Grey Round Neck Imported Cotton Half Sleeve Premium Designer T-Shirt',
      image: '../../../assets/images/Image 2.jpg',
      color: 'Grey',
      size: 'M',
      price: 1549.0,
      quantity: 1,
    },
  ]);

  categories = signal<CategoryItem[]>([
    {
      name: 'Sustainable Style',
      image: '../../../../assets/images/Round Neck.jpg',
      price: 2000,
      discountedPrice: 1500,
    },
    {
      name: 'Weekend Collection',
      image: '../../../../assets/images/Artisan Crafted.webp',
      price: 2500,
      discountedPrice: 2000,
    },
    {
      name: 'Urban Chic',
      image: '../../../../assets/images/top pick 3.webp',
      price: 3000,
      discountedPrice: 2700,
    },
    {
      name: 'Formal Elegance',
      image: '../../../../assets/images/category-image-1.jpg',
      price: 1800,
      discountedPrice: 1500,
    },
    {
      name: 'Sustainable Style',
      image: '../../../../assets/images/top pick 2.webp',
      price: 2000,
      discountedPrice: 1500,
    },
    {
      name: 'Weekend Collection',
      image: '../../../../assets/images/top pick 4.webp',
      price: 2500,
      discountedPrice: 2000,
    },
    {
      name: 'Urban Chic',
      image: '../../../../assets/images/top pick 2.webp',
      price: 3000,
      discountedPrice: 2700,
    },
    {
      name: 'Formal Elegance',
      image: '../../../../assets/images/top pick 3.webp',
      price: 1800,
      discountedPrice: 1500,
    },
  ]);

  selectedSize: string = 'S'; // Default size selection
  // Manual Scroll
  scrollCarousel(direction: number): void {
    const container = this.carouselContainer.nativeElement;
    const scrollAmount = container.offsetWidth / 3; // Adjust scroll amount based on visible items
    container.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth',
    });
  }

  // Automatic Scroll
  startAutoScroll(): void {
    this.autoScrollInterval = setInterval(() => {
      const container = this.carouselContainer.nativeElement;

      // Maximum scrollable width
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft < maxScrollLeft) {
        // Increment the scroll position
        container.scrollLeft += container.clientWidth / 3; // Adjust the scroll step
      } else {
        // Reset scroll position to the start
        container.scrollLeft = 0;
      }
    }, 3000); // Adjust interval duration (e.g., 3000ms = 3 seconds)
  }

  ngOnDestroy(): void {
    clearInterval(this.autoScrollInterval);
  }

  // Method to handle size selection
  selectSize(size: string) {
    this.selectedSize = size;
  }

  updateQuantity(amount: number): void {
    this.quantity = Math.max(1, this.quantity + amount);
  }

  // Method to handle Add to Cart action
  addToCart() {
    this.isCartOpen.update((open) => !open);
  }

  calculateTotalPrice(): number {
    return Number(this.product().price) * this.quantity;
  }

  onNavigateToProductDetails(): void {
    this.router.navigate(['/product', { id: '11' }]);
  }

  currentScroll = 0;
}
