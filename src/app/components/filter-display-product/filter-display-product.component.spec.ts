import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDisplayProductComponent } from './filter-display-product.component';

describe('FilterDisplayProductComponent', () => {
  let component: FilterDisplayProductComponent;
  let fixture: ComponentFixture<FilterDisplayProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterDisplayProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDisplayProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
