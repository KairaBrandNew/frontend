import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
  constructor(
    private router: Router) {}

  categories = [
    { name: 'T-shirts', imageUrl: '../../../../assets/images/Round Neck.jpg' },
    { name: 'Artisan Crafted', imageUrl: '../../../assets/images/Artisan Crafted.webp' },
    { name: 'Heritage Classics', imageUrl: '../../../assets/images/Heritage Classics.webp' },
    { name: 'Weekend Collections', imageUrl: '../../../assets/images/weekend-collections.webp' }
  ];

  onViewDetails(categoryName: string): void {
    this.router.navigate(['/product-list', { id: '12' }]);
  }

}
