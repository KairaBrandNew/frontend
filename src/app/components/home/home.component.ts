import { Component, signal, Signal, ViewChild } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { AnimationType } from './carousel/carousel.animations';
import { MultiGridCarouselComponent } from './multi-grid-carousel/multi-grid-carousel.component';
import { PricingCardComponent } from '../shared features/pricing-card/pricing-card.component';
import { PricingItemModel, ItemSlideModel, ProductModel, ImageWithTagLineModel, ProductVideoItemModel } from '../../models/home.model';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { ShopCategoriesComponent } from '../../shop-categories/shop-categories.component';
import { ScrollAnimationDirective } from '../../directives/scroll-animation/scroll-animation.directive';
import { HomeService } from './home.service';
import { ProductCarouselCardComponent } from './product-card-carousel/product-card-carousel.component';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { VideoPlayerComponent } from '../../video-player/video-player.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, WelcomeSectionComponent, PricingCardComponent, 
    ShopCategoriesComponent, MultiGridCarouselComponent, ScrollAnimationDirective, ProductCarouselCardComponent, VideoPlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private baseUrl = 'https://backend-kaira.onrender.com/api/home/trending_items';
  @ViewChild(CarouselComponent, { static: true }) carousel!: CarouselComponent;
  animationType = AnimationType.Scale;
  productItems = signal<any[]>([]);
  trendingItems = signal<any[]>([]);
  topCategoryItems = signal<any[]>([]);
  

  constructor(private homeService: HomeService, private http: HttpClient) {
    this.productItems = this.homeService.dataSignal
  }

  ngOnInit(): void {
    this.fetchAllProjectDetails();
  }

  fetchAllProjectDetails(): void {
      this.http
        .get<any[]>(this.baseUrl)
        .pipe(
          catchError((error) => {
            console.error('Error fetching posts:', error);
            return of([]); // Return an empty array if there's an error
          })
        )
        .subscribe((trending_item) => {
          this.productItems.set(trending_item[0]?.data); // Update the signal with the fetched data
          this.filterItems();
        });
    }

  filterItems() {
    // Separate items based on isTrendingItem and isTopCategory
      this.trendingItems.set(this.productItems().filter(item => item.isTrendingItem).slice(0, 6));
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
    { imageUrl: '../../../../assets/images/carousel_image_1_new.jpeg'},
    { imageUrl: "../../../assets/images/carousel_image_2_new.jpeg"},
    { imageUrl: "../../../assets/images/carousel_image_3_new.jpeg"},
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

  welcomeData: ImageWithTagLineModel = { 
    imageSrc: '../../../../assets/images/welcome_image_1.jpeg',
    imageAlt: "Cute & Comfy Baby's Clothing",
    heading: 'WELCOME',
    subheading: 'StylishWelco',
    tagline: "Baby's Clothing for Every Moment",
    description: 'Wrap your little ones in style and comfort with our newest collections.',
    buttonLabel: 'SHOP NOW'
  }


  latestItems: PricingItemModel[] = [
    {
      name: 'Norwich Loose Fit Joggers',
      price: 1200.00,
      image: '../../../../assets/images/latest 1.webp',
    },
    {
      name: 'Classic Hoodie',
      price: 2000.00,
      image: '../../../../assets/images/latest 2.webp',
    },
    {
      name: 'Corduroy Textured Shackets',
      price: 1500.00,
      image: '../../../../assets/images/latest 3.webp',
    },
    {
      name: 'Zip-up Textured Polo Shirts ',
      price: 1200.00,
      image: '../../../../assets/images/latest 4.webp',
    },
  ];

  productVideo: ProductVideoItemModel[] = [
    {
      name: 'Norwich Loose Fit Joggers',
      price: 1200.00,
      videoUrl: 'https://player.vimeo.com/video/1057772845?h=8f83c3e4b7&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    },
    {
      name: 'Classic Hoodie',
      price: 2000.00,
      videoUrl: 'https://player.vimeo.com/video/1057772812?h=47291cba68&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    },
    {
      name: 'Corduroy Textured Shackets',
      price: 1500.00,
      videoUrl: 'https://player.vimeo.com/video/1057772771?h=f48afa5d9c&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    },
    {
      name: 'Corduroy Textured Shackets',
      price: 1500.00,
      videoUrl: 'https://player.vimeo.com/video/1058194909?h=0b95fdbb81&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    },
  ];


  setAnimationType(type: any) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }

}
