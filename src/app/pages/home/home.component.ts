import { Component, Inject } from '@angular/core';

import { CommonModule, DOCUMENT, NgForOf } from '@angular/common';
import { SomosVozComponent } from '../somos-voz/somos-voz.component';
import { ServicesGridComponent } from '../services/services-grid/services-grid.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { SocialComponent } from '../social/social.component';
import { SocialWidgetComponent } from '../social-widget/social-widget.component';
import { PaymentMethodsComponent } from '../payment-methods/payment-methods.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ServicesGridComponent,
    SomosVozComponent,
    QuickActionsComponent,
    SocialComponent,
    SocialWidgetComponent,
    PaymentMethodsComponent,
    RouterLink, NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  baseUrl = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
    const base = this.document.querySelector('base')?.getAttribute('href');
    this.baseUrl = base ?? '/';
  }

  ngAfterViewInit() {
    const section = document.querySelector('.services-cta') as HTMLElement;
    const bg = section?.dataset['bg'];
    const bgDiv = section?.querySelector('.cta-bg') as HTMLElement;

    if (!section || !bg || !bgDiv) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          bgDiv.style.backgroundImage = `url(${bg})`;
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(section);
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
