import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateProductItemComponent } from './add-update-clothing-item.component';

describe('AddUpdateClothingItemComponent', () => {
  let component: AddUpdateProductItemComponent;
  let fixture: ComponentFixture<AddUpdateProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateProductItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
