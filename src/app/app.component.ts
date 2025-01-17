import { CommonModule } from '@angular/common';
import { Component, REQUEST, inject } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared features/header/header.component';
import { FooterComponent } from './components/shared features/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shopping-site-angular-19';
  constructor() {
    const request = inject(REQUEST);
    console.log(request?.url);
  }
}
