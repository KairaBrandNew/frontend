import {
  trigger,
  transition,
  style,
  animate,
  useAnimation,
} from '@angular/animations';
import { Component, effect, Input, signal } from '@angular/core';
import {
  AnimationType,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut,
  scaleIn,
  scaleOut,
} from './carousel.animations';
import { ItemSlideModel } from '../../../models/home.model';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  animations: [
    trigger('slideAnimation', [
      /* scale */
      transition('void => scale', [
        useAnimation(scaleIn, { params: { time: '500ms' } }),
      ]),
      transition('scale => void', [
        useAnimation(scaleOut, { params: { time: '500ms' } }),
      ]),

      /* fade */
      transition('void => fade', [
        useAnimation(fadeIn, { params: { time: '500ms' } }),
      ]),
      transition('fade => void', [
        useAnimation(fadeOut, { params: { time: '500ms' } }),
      ]),

      /* flip */
      transition('void => flip', [
        useAnimation(flipIn, { params: { time: '500ms' } }),
      ]),
      transition('flip => void', [
        useAnimation(flipOut, { params: { time: '500ms' } }),
      ]),

      /* JackInTheBox */
      transition('void => jackInTheBox', [
        useAnimation(jackIn, { params: { time: '700ms' } }),
      ]),
      transition('jackInTheBox => void', [
        useAnimation(jackOut, { params: { time: '700ms' } }),
      ]),
    ]),
  ],
})
export class CarouselComponent {
  @Input() slides!: ItemSlideModel[];
  @Input() animationType = AnimationType.Scale;
  currentSlide = signal(0); // Signal for currentSlide

  constructor() {
    // this.autoImageChange();
  }

  // Method for manual previous click
  onPreviousClick() {
    this.currentSlide.update(
      (value) => (value - 1 + this.slides.length) % this.slides.length
    );
    console.log(
      'Previous clicked, new current slide is: ',
      this.currentSlide()
    );
  }

  // Method for manual next click
  onNextClick() {
    this.currentSlide.update((value) => (value + 1) % this.slides.length);
    console.log('Next clicked, new current slide is: ', this.currentSlide());
  }

  autoImageChange(): void {
    effect(() => {
      const intervalId = setInterval(() => {
        this.currentSlide.update((value) => (value + 1) % this.slides.length); // Auto transition logic
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(intervalId); // Cleanup interval
    });
  }
}
