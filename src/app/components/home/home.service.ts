import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signal, signal } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CartItem } from '../cart-side-panel/cart-side-panel.component';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  // Change this to your Node.js API endpoint
  private baseUrl = 'https://backend-kaira.onrender.com/api/home/trending_items';
  // private baseUrl = 'http://localhost:8080/api/clothing';
  public dataSignal = signal<any[]>([]);
  productDetails = []

  constructor(private http: HttpClient) {}

  // Method to call the Node.js API
  fetchTrendingItems(): void {
    this.http
      .get<any[]>(this.baseUrl)
      .pipe(
        catchError((error) => {
          console.error('Error fetching posts:', error);
          return of([]); // Return an empty array if there's an error
        })
      )
      .subscribe((trending_item) => {
        console.log('service',trending_item[0]?.data);
        this.dataSignal.set(trending_item[0]?.data); // Update the signal with the fetched data
        this.productDetails = trending_item[0]?.data;
      });
  }
  // Method to call the Node.js API
  addClothingItems(clothingData: any): void {
    // POST request to the Node.js API
    this.http
      .post<any>(
        this.baseUrl,
        clothingData
      )
      .pipe(
        catchError((error) => {
          alert('Error adding clothing item')
          return of(null); // Return null if there's an error
        })
      )
      .subscribe((response) => {
        if (response) {
          alert('Clothing item added successfully')
          this.dataSignal.set(response); // Update the signal with the API response
        }
      });
  }

  // Get Clothing by ID
  // getClothingById(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/clothing/${id}`);
  // }

  // Get Attributes by Type (e.g., 'category', 'size', etc.)
  getAttributesByType(type: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/attributes/${type}`);
  }

   // Get all attributes grouped by type
   getAllAttributes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/attributes`);
  }
}
