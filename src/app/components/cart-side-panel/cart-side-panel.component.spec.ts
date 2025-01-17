import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSidePanelComponent } from './cart-side-panel.component';

describe('CartSidePanelComponent', () => {
  let component: CartSidePanelComponent;
  let fixture: ComponentFixture<CartSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSidePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
