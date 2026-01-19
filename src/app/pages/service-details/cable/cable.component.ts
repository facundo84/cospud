import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cable',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './cable.component.html',
  styleUrl: './cable.component.scss'
})
export class CableComponent {

  services = [
    {
      id: 'cable',
      title: 'Telecomunicaciones',
      icon: 'icons/cable.svg',
      downloadIcon: 'icons/requisitos.svg',
      image: 'images/servicio-agua.png',
      download: 'assets/docs/requisitos-agua.pdf'
    }
  ];
}
