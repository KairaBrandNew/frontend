export interface PricingItemModel {
    name: string;
    price: number;
    image: string;
    description?: string;
    videoUrl?: string;
  }


  export interface ItemSlideModel {
    title?: string;
    imageUrl: string;
    description?: string;
  }

  export interface ProductModel {
    title: string;
    price: number;
    color: string;
    sizes: string[];
    discountCode: string;
    discountDetails: string;
    extraDiscount: string;
    imageUrl: string;
    taxesIncluded: string;
  }

  export interface ImageWithTagLineModel {
    imageSrc: string;
    imageAlt: string;
    heading: string;
    subheading: string;
    tagline: string;
    description: string;
    buttonLabel: string;
  }
  