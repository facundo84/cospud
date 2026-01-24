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
      link: '/service-details/electricidad'
    },
    {
      label: 'Telefonía',
      fragment: 'telefonia',
      left: 42,
      link: '/service-details/cable'
    },
    {
      label: 'Cable',
      fragment: 'cable',
      left: 58,
      link: '/service-details/cable'
    },
    {
      label: 'Internet',
      fragment: 'internet',
      left: 74,
      link: '/service-details/cable'
    },
    {
      label: 'Ambulancia</br> Sepelios',
      fragment: 'ambulancia',
      left: 92,
      link: '/service-details/sepelios'
    }
  ];


  // services = [
  //   {
  //     id: 'agua',
  //     title: 'Agua',
  //     icon: '/icons/agua.svg',
  //     image: '/images/servicio-agua.png',
  //     description: [
  //       'El agua potable es un recurso esencial para la vida.',
  //       'COSPUD realiza la captación, tratamiento y distribución.'
  //     ],
  //     requirements: [
  //       'Solicitud del propietario.',
  //       'Permiso municipal.',
  //       'Pago de costos.',
  //       'Instalación de medidor.'
  //     ],
  //     download: 'assets/docs/requisitos-agua.pdf'
  //   },
  //   {
  //     id: 'electricidad',
  //     title: 'Electricidad',
  //     icon: 'assets/svg/electricidad.svg',
  //     image: 'assets/img/servicios/electricidad.jpg',
  //     description: [
  //       'Servicio de energía eléctrica domiciliaria.'
  //     ],
  //     requirements: [
  //       'Documentación del inmueble.',
  //       'Instalación aprobada.'
  //     ],
  //     download: 'assets/docs/requisitos-electricidad.pdf'
  //   }
  // ];

}
