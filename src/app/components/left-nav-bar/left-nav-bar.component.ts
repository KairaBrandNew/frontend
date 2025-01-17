import { Component, EventEmitter, Output, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css'],
  imports: [MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,]
})
export class LeftNavBarComponent {
  @Output() closeNavEmit = new EventEmitter<void>();


  // Define a signal for the menu items
  menuItems = signal([
    { label: 'New Arrival 😊', link: '/product-list',  children: [] },
    { label: 'Best Selling', link: '/product',  children: [] },
    {
      label: "Men's Shirts", 
      link: '/mens-shirts', 
      children: [
        { label: 'Casual Shirts', link: '/product-list' },
        { label: 'Formal Shirts', link: '/product-list' }
      ]
    },
    { label: "Men's Co-ords", link: '/product',  children: [] },
    { label: 'T-Shirts', link: '/product-list',  children: [] },
    { label: 'Plus Size ➕', link: '/plus-size',  children: [] },
    { label: '🚨 Back in Stock 🚨', link: '/back-in-stock',  children: [] },
    { label: 'Bottom Wear', link: '/bottom-wear',  children: [] },
    { label: 'Exchange & Return Center', link: '/exchange-return',  children: [] },
    { label: 'Be in the Spotlight', link: '/spotlight',  children: [] },
    { label: 'Support', link: '/support',  children: [] },
    { label: 'About Us', link: '/about',  children: [] },
    { label: 'For Business Inquiry', link: '/business-inquiry',  children: [] }
  ]);

  // Toggle the accordion visibility for any menu item
  toggleAccordion(item: any) {
    item.isExpanded = !item.isExpanded;
  }

  ngAfterViewInit() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const parentItem = button.parentElement;
        parentItem?.classList.toggle('active');
      });
    });
  }

  closeNav() {
    this.closeNavEmit.emit(); // Emit the event here
  }

  // Add or update menu items dynamically
  addMenuItem(newItem: { label: string; link: string; icon: string }) {
    // this.menuItems.update((items) => [...items, newItem]);
  }

  // removeMenuItem(label: string) {
  //   this.menuItems.update((items) => items.filter((item) => item.label !== label));
  // }

   // Track function for ngFor
  //  trackByFn(index: number, item: any): any {
  //   return item.label; // Track by label to optimize rendering
  // }
}
