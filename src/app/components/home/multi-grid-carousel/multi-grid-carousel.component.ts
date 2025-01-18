import { Component, Input, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {  } from '../../shared features/header/header.component';
import { ItemSlideModel } from '../../../models/home.model';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-multi-grid-carousel',
  imports: [MatGridListModule],
  templateUrl: './multi-grid-carousel.component.html',
  styleUrl: './multi-grid-carousel.component.scss'
})
export class MultiGridCarouselComponent {
    constructor(private router: Router) {}
    @Input() trendingItems = signal<ItemSlideModel[]>([]);

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  navigateToTrending():void {
    this.router.navigate(['/product-list', { id: '12' }]);
  }
}
