import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signal, signal } from '@angular/core';
import { catchError, of } from 'rxjs';
import { CartItem } from '../cart-side-panel/cart-side-panel.component';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  // Change this to your Node.js API endpoint
  private apiUrl = 'https://backend-kaira.onrender.com/api/home/trending_items';
  public dataSignal = signal<any[]>([]);
  

  constructor(private http: HttpClient) {}

  // Method to call the Node.js API
  fetchTrendingItems(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching posts:', error);
        return of([]); // Return an empty array if there's an error
      })
    ).subscribe(trending_item => {
      this.dataSignal.set(trending_item[0].data); // Update the signal with the fetched data
    });
  }
}