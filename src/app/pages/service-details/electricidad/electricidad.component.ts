import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-electricidad',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './electricidad.component.html',
  styleUrl: './electricidad.component.scss'
})
export class ElectricidadComponent {

  services = [
    {
      id: 'electricidad',
      title: 'Electricidad',
      icon: 'icons/electricidad.svg',
      downloadIcon: 'icons/requisitos.svg',
      image: 'images/servicio-agua.png',
      download: 'assets/docs/requisitos-agua.pdf'
    }
  ];
}
