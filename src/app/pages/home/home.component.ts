import { Component, Inject } from '@angular/core';
import { DOCUMENT, CommonModule, NgForOf } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

import { PaymentMethodsComponent } from '../payment-methods/payment-methods.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { ServicesGridComponent } from '../services/services-grid/services-grid.component';
import { SocialWidgetComponent } from '../social-widget/social-widget.component';
import { SocialComponent } from '../social/social.component';
import { SomosVozComponent } from '../somos-voz/somos-voz.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgForOf,
    ServicesGridComponent,
    SomosVozComponent,
    QuickActionsComponent,
    SocialComponent,
    SocialWidgetComponent,
    PaymentMethodsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showModal = false;
  baseUrl = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    const base = this.document.querySelector('base')?.getAttribute('href');
    this.baseUrl = base ?? '/';
  }

  ngAfterViewInit(): void {
    const section = document.querySelector('.services-cta') as HTMLElement | null;

    if (!section) return;

    const bg = section.dataset['bg'];
    const bgDiv = section.querySelector('.cta-bg') as HTMLElement | null;

    if (!bg || !bgDiv) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            bgDiv.style.backgroundImage = `url(${bg})`;
            obs.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    observer.observe(section);
  }

  ngOnInit(): void {

    // ✅ 1. Primer render (hard load / F5)
    if (this.isHomeRoute(this.router.url)) {
      this.showModal = true;
    }

    // ✅ 2. Navegaciones posteriores
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (this.isHomeRoute(event.urlAfterRedirects)) {
          this.showModal = true;
        } else {
          this.showModal = false;
        }
      });
  }

  private isHomeRoute(url: string): boolean {
    return url === '/' || url === '';
  }

  closeModal(): void {
    this.showModal = false;
  }

  services = [
    { label: 'Agua', left: 8, link: 'service-details/agua' },
    { label: 'Electricidad', left: 26, link: 'service-details/electricidad' },
    { label: 'Telefonía', left: 42, link: 'service-details/telefonia' },
    { label: 'Cable', left: 58, link: 'service-details/cable' },
    { label: 'Internet', left: 74, link: 'service-details/internet' },
    { label: 'Ambulancia<br/>Sepelios', left: 92, link: 'service-details/sepelios' }
  ];
}