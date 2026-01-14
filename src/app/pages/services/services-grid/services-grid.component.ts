import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../service-card/service-card.component';


@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [
    CommonModule,
    ServiceCardComponent
  ],
  templateUrl: './services-grid.component.html',
  styleUrls: ['./services-grid.component.scss']
})
export class ServicesGridComponent {
  services = [
    { title: 'Electricidad', icon: 'icons/electricidad.svg', bgCcolor: 'electricidad', url: "/", fontColor: '#ffffff', },
    { title: 'Agua', icon: 'icons/agua.svg', bgCcolor: 'agua', url: "/", fontColor: '#ffffff' },
    { title: 'Internet', icon: 'icons/internet.svg', bgCcolor: 'internet', url: "/", fontColor: '#b5cd3d' },
    { title: 'Cable', icon: 'icons/cable.svg', bgCcolor: 'cable', url: "/", fontColor: '#27b7cc' },
    { title: 'Teléfono', icon: 'icons/telefono.svg', bgCcolor: 'telefono', url: "/", fontColor: '#275330' }
  ]
}
