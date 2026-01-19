import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sepelios',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './sepelios.component.html',
  styleUrl: './sepelios.component.scss'
})
export class SepeliosComponent {

  services = [
    {
      id: 'sepelios',
      title: 'Servicio de Ambulancia y Sepelio',
      icon: 'icons/agua.svg',
      downloadIcon: 'icons/requisitos.svg',
      image: 'images/servicio-agua.png',
      download: 'assets/docs/requisitos-agua.pdf'
    }
  ];
}
