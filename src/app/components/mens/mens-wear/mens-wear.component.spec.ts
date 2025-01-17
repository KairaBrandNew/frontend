import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWearComponent } from './mens-wear.component';
import { beforeEach, describe, it } from 'node:test';

describe('MenWearsComponent', () => {
  let component: MensWearComponent;
  let fixture: ComponentFixture<MensWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensWearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
