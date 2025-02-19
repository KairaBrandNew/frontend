import { Component, Input } from '@angular/core';
import { PricingItemModel } from '../models/home.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-video-player',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  @Input() pricingItems: PricingItemModel[] = [];
}
