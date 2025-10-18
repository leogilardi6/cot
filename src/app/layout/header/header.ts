import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatButton, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Header {
  isSticky = signal(false);
  isNonVisible = signal(false);
  isHome = signal(true);
  isMobileMenuOpen = signal(false);
  router = inject(Router);

  constructor() {
    window.addEventListener('scroll', this.onScroll.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize();
    this.router.events.subscribe(() => {
      this.isHome.set(this.router.url === '/');
    });
  }

  onScroll() {
    const y = window.scrollY;
    this.isSticky.set(y > 150);
    this.isNonVisible.set(y > 100 && y < 150);
  }

  onResize() {
    if (window.innerWidth < 1000) {
      this.isMobileMenuOpen.set(false);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  open(route: string) {
    window.open(route, '_blank');
  }
}
