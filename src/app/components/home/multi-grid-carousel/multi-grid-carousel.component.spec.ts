import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiGridCarouselComponent } from './multi-grid-carousel.component';

describe('MultiGridCarouselComponent', () => {
  let component: MultiGridCarouselComponent;
  let fixture: ComponentFixture<MultiGridCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiGridCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiGridCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
