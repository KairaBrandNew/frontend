import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardCarouselComponent } from './product-card-carousel.component';

describe('ProductCardCarouselComponent', () => {
  let component: ProductCardCarouselComponent;
  let fixture: ComponentFixture<ProductCardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
