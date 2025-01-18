import { Component, signal, Signal, ViewChild } from '@angular/core';
import { HeaderComponent } from '../shared features/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselComponent } from './carousel/carousel.component';
import { AnimationType } from './carousel/carousel.animations';
import { MultiGridCarouselComponent } from './multi-grid-carousel/multi-grid-carousel.component';
import { FooterComponent } from '../shared features/footer/footer.component';
import { PricingCardComponent } from '../shared features/pricing-card/pricing-card.component';
import { PricingItemModel, ItemSlideModel, ProductModel } from '../../models/home.model';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { ShopCategoriesComponent } from '../../shop-categories/shop-categories.component';
import { ScrollAnimationDirective } from '../../directives/scroll-animation/scroll-animation.directive';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, WelcomeSectionComponent, PricingCardComponent, 
    ShopCategoriesComponent, MultiGridCarouselComponent, ScrollAnimationDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild(CarouselComponent, { static: true }) carousel!: CarouselComponent;
  animationType = AnimationType.Scale;
  productItems = signal<any[]>([]);
  trendingItems = signal<any[]>([]);
  topCategoryItems = signal<any[]>([]);

  

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    // Fetch trendingItems on component initialization
    this.productItems = this.homeService.dataSignal;
    this.homeService.fetchTrendingItems();
    this.filterItems()
  }

  filterItems() {
    // Separate items based on isTrendingItem and isTopCategory
    this.trendingItems.set(this.productItems().filter(item => item.isTrendingItem));
    this.topCategoryItems.set(this.productItems().filter(item => item.isTopCategory));
  }


  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];

  homeCarouselSlides: ItemSlideModel[] = [
    { imageUrl: '../../../../assets/images/home-bg.webp'},
    { imageUrl: "../../../assets/images/Image 2.jpg"},
    { imageUrl: "../../../assets/images/Image 4.jpg"},
  ];

  // trendingItems: ItemSlideModel[] = [
  //   { imageUrl: '../../../../assets/images/trending-1.webp', title: "All White Indian Wear", description: 'For an always cool outlook'},
  //   { imageUrl: "../../../../assets/images/trending-2.webp", title: "Ethnic Casuals", description: 'Indians surely know the route of comfort' },
  //   { imageUrl: "../../../../assets/images/trending-3.webp", title: "Printed Kurta Sets", description: 'Festival wear that your family will love'},
  // ];

  pricingItems: PricingItemModel[] = [
    {
      name: 'Peacock blue ',
      price: 1200.00,
      image: '../../../../assets/images/top pick 1.webp'
    },
    {
      name: ' Akriti',
      price: 2000.00,
      image: '../../../../assets/images/top pick 2.webp'
    },
    {
      name: 'Alashka',
      price: 1500.00,
      image: '../../../../assets/images/top pick 3.webp'
    },
    {
      name: 'Attractive ',
      price: 1200.00,
      image: '../../../../assets/images/top pick 4.webp'
    },
  ];

  // Product details
  productModel: ProductModel = {
    title: 'Grey Round Neck Imported Cotton Half Sleeve Premium Designer T-Shirt',
    price: 1549,
    color: 'Grey',
    sizes: ['S', 'M', 'L', 'XL'],
    discountCode: 'RUDHVA10',
    discountDetails: 'Flat 10% off on Purchase Rs. 1,999.',
    extraDiscount: 'Extra 5% on Prepaid Order | Hurry up Before Sold Out',
    imageUrl: 'path-to-image',
    taxesIncluded: 'Inclusive of all taxes',
  };

  setAnimationType(type: any) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }

}
