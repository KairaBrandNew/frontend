import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-display-product',
  imports: [NgClass],
  templateUrl: './filter-display-product.component.html',
  styleUrl: './filter-display-product.component.css',
})
export class FilterDisplayProductComponent {
  constructor(private router: Router) {}
  isSidebarVisible: boolean = false;

  // Filter-related state
  filters: { [key: string]: any[] } = {
    collection: [],
    size: [],
    price: [],
  };

  products = [
    {
      image: '../../../../assets/images/category-image-1.jpg',
      title: 'Dark Grey Sequence Club Wear',
      price: 1.449,
      size: 'M',
      originalPrice: '2,899.00',
      collection: 'designer-shirts',
    },
    {
      image: '../../../../assets/images/weekend-collections.webp',
      title: 'Hot Black Sequence Club Wear',
      price: 1000,
      size: 'L',
      originalPrice: '2,899.00',
      collection: 'designer-shirts',
    },
    {
      image: '../../../../assets/images/Heritage Classics.webp',
      title: 'Snake Navy Sequence Club Wear',
      price: 1900,
      originalPrice: '2,899.00',
      collection: 'designer-shirts',
    },
    {
      image: '../../../../assets/images/Trending Mens Wear 1_1.png',
      title: 'Dark Grey Sequence Club Wear',
      price: 1200,
      originalPrice: '2,899.00',
      collection: 'designer-shirts',
    },
    {
      image: '../../../../assets/images/Trending Mens Wear 2.png',
      title: 'Hot Black Sequence Club Wear',
      price: 1.449,
      size: 'XL',
      originalPrice: '2,899.00',
      collection: 'designer-shirts',
    },
    {
      image: '../../../../assets/images/Trending Mens Wear 3.png',
      title: 'Snake Navy Sequence Club Wear',
      price: 1.449,
      size: 'XXL',
      originalPrice: '2,899.00',
      collection: 'designer-shirts',
    },
  ];
  filteredProducts = [...this.products];

  // Toggle sidebar visibility
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  // Handle filter changes
  onFilterChange(filterType: string, value: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.filters[filterType].push(value);
    } else {
      this.filters[filterType] = this.filters[filterType].filter(
        (item) => item !== value
      );
    }
  }

  // Apply the selected filters
  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      // Check collection filters
      if (
        this.filters['collection'].length &&
        !this.filters['collection'].includes(product.collection)
      ) {
        return false;
      }

      // Check size filters
      if (
        this.filters['size'].length &&
        !this.filters['size'].includes(product.size)
      ) {
        return false;
      }

      // Check price filters
      if (this.filters['price'].length) {
        const isPriceMatch = this.filters['price'].some((priceRange) => {
          if (priceRange === 'below-1500') {
            return product.price < 1500;
          }
          if (priceRange === '1500-2000') {
            return product.price >= 1500 && product.price <= 2000;
          }
          return false;
        });

        if (!isPriceMatch) {
          return false;
        }
      }

      return true;
    });
  }

  // Close the sidebar
  closeSidebar() {
    this.isSidebarVisible = false;
  }

  onNavigateToProductDetail(): void {
    this.router.navigate(['/product', { id: '12' }]);
  }
}
