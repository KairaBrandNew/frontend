import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Input, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselComponent } from '../../home/carousel/carousel.component';
import { AnimationType } from '../../home/carousel/carousel.animations';
import { MatCardModule } from '@angular/material/card';
import { CartItem, CartSidePanelComponent } from '../../cart-side-panel/cart-side-panel.component';
import { LeftNavBarComponent } from '../../left-nav-bar/left-nav-bar.component';


@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, CartSidePanelComponent, LeftNavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
isCartOpen = signal(false);
isSideMenuOpen = signal(false);


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
      title: 'Grey Round Neck Imported Cotton Half Sleeve Premium Designer T-Shirt',
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
      title: 'Grey Round Neck Imported Cotton Half Sleeve Premium Designer T-Shirt',
      image: '../../../assets/images/Image 2.jpg',
      color: 'Grey',
      size: 'M',
      price: 1549.0,
      quantity: 1,
    },
  ]);

  addToCart() {
    this.isCartOpen.update((open) => !open);  
  }

  toggleSideMenu() {
    this.isSideMenuOpen.update((open) => !open);
  }
 
}
