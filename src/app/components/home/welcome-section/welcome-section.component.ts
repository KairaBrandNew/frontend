import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-section',
  imports: [MatButtonModule, MatCardModule, MatGridListModule],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css',
})
export class WelcomeSectionComponent {
  constructor(private router: Router) {}

  navigateToShop(): void {
    this.router.navigate(['/product-list', { id: '12' }]);
  }
}
