import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PricingItemModel } from '../../../models/home.model';

@Component({
  selector: 'app-pricing-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})
export class PricingCardComponent {
  @Input() pricingItems: PricingItemModel[] = [];

}
