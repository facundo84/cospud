import { Component, Inject } from '@angular/core';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { DOCUMENT, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [QuickActionsComponent, RouterLink, NgForOf],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  baseUrl = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
    const base = this.document.querySelector('base')?.getAttribute('href');
    this.baseUrl = base ?? '/';
  }

  services = [
    { label: 'Agua', left: 8, fragment: 'water' },
    { label: 'Electricidad', left: 26, fragment: 'electricity' },
    { label: 'Telefonía', left: 42, link: '/servicios/telefonia' },
    { label: 'Cable', left: 58, link: '/servicios/cable' },
    { label: 'Internet', left: 74, link: '/servicios/internet' },
    { label: 'Ambulancia<br/>Sepelios', left: 92, link: '/servicios/ambulancia' }
  ];
}
