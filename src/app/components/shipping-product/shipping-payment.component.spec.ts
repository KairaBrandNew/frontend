import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingProductComponent } from './shipping-payment.component';

describe('ShippingProductComponent', () => {
  let component: ShippingProductComponent;
  let fixture: ComponentFixture<ShippingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
