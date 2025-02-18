import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
export interface CartItem {
  title: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number; 
}

@Component({
  selector: 'app-cart-side-panel',
  templateUrl: './cart-side-panel.component.html',
  styleUrls: ['./cart-side-panel.component.css'],
  imports: [],
})
export class CartSidePanelComponent {
  @Input() isOpen = signal(false); // Signal to control visibility of the side panel
  @Input() cartItems = signal<CartItem[]>([]);
  showSuccess!: boolean;
  showCancel!: boolean;
  showError!: boolean;
  

    // Expose Math object
  Math = Math;

  
  get totalPrice() {
    return this.cartItems().reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get discountedPrice() {
    return this.totalPrice * 0.15; // Example: 15% discount
  }

  toggleCart() {
    this.isOpen.update((open) => !open);
  }

  removeItem(index: number) {
    const updatedItems = this.cartItems().filter((_, i) => i !== index);
    this.cartItems.set(updatedItems);
  }
}
