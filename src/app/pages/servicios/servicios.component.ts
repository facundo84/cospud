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

  serviceList = [
    {
      label: 'Agua',
      fragment: 'agua',
      left: 8,
      link: '/service-details/agua',
      icon: 'icons/agua.svg'
    },
    {
      label: 'Electricidad',
      fragment: 'electricidad',
      left: 26,
      link: '/service-details/electricidad',
      icon: 'icons/electricidad.svg'
    },
    {
      label: 'Telefonía',
      fragment: 'telefonia',
      left: 42,
      link: '/service-details/cable',
      icon: 'icons/telefono.svg'
    },
    {
      label: 'Cable',
      fragment: 'cable',
      left: 58,
      link: '/service-details/cable',
      icon: 'icons/cable.svg'
    },
    {
      label: 'Internet',
      fragment: 'internet',
      left: 74,
      link: '/service-details/cable',
      icon: 'icons/internet.svg'
    },
    {
      label: 'Ambulancia</br> Sepelios',
      fragment: 'ambulancia',
      left: 92,
      link: '/service-details/sepelios',
      icon: 'icons/sepelio.svg'
    }
  ];
}
