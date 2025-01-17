// hover-menu.directive.ts
import { Directive, HostListener, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Directive({
  selector: '[appHoverMenu]',
  standalone: true,
})
export class HoverMenuDirective {
  @Input('appHoverMenu') menuTrigger!: MatMenuTrigger;

  @HostListener('mouseenter') onMouseEnter() {
    this.menuTrigger.openMenu();
  }

  @HostListener('mouseleave') onMouseLeave() {
    setTimeout(() => this.menuTrigger.closeMenu(), 300);
  }
}
