import { Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { ImageWithTagLineModel } from '../../../models/home.model';

@Component({
  selector: 'app-welcome-section',
  imports: [MatButtonModule, MatCardModule, MatGridListModule],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css',
})
export class WelcomeSectionComponent {
  @Input() imageWithTagLine!: ImageWithTagLineModel;


  constructor(private router: Router) {}

  navigateToShop(): void {
    this.router.navigate(['/product-list', { id: '12' }]);
  }
}
