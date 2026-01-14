import { DOCUMENT, NgForOf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss'
})
export class QuickActionsComponent {
  baseUrl = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
    const base = this.document.querySelector('base')?.getAttribute('href');
    this.baseUrl = base ?? '/';
  }

  services = [
    { label: 'Agua', left: 8, link: '/servicios/agua' },
    { label: 'Electricidad', left: 26, link: '/servicios/electricidad' },
    { label: 'Telefonía', left: 42, link: '/servicios/telefonia' },
    { label: 'Cable', left: 58, link: '/servicios/cable' },
    { label: 'Internet', left: 74, link: '/servicios/internet' },
    { label: 'Ambulancia<br/>Sepelios', left: 92, link: '/servicios/ambulancia' }
  ];
}
