import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.scss']
})
export class SomosComponent {
  baseUrl = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
    const base = this.document.querySelector('base')?.getAttribute('href');
    this.baseUrl = base ?? '/';
  }

  tabs = [
    {
      title: 'Misión',
      color: 'mission',
      mainContent:
        'Proveer servicios públicos de excelencia, acordes a las necesidades y requerimientos de los usuarios y asociados, brindando una mejor calidad de vida, acompañando con innovación el crecimiento y desarrollo de nuestra comunidad, adoptando y promoviendo como ejes éticos y de acción los valores del cooperativismo y el cuidado de los recursos naturales.'
    },
    {
      title: 'Visión',
      color: 'vision',
      mainContent:
        'Ser una cooperativa de servicios públicos referente y de preferencia a nivel local y nacional, reconocida y legitimada por sus valores, capacidad de gestión, innovación continua y compromiso ante la sociedad y el medio ambiente.'
    },
    {
      title: 'Valores',
      color: 'values',
      mainContent: 'La Cooperativa se guía por los principios del cooperativismo: ayuda mutua, democracia, equidad, solidaridad, responsabilidad social, respeto mutuo, autonomía e independencia. Estos valores garantizan la participación de los socios, la igualdad de derechos y la búsqueda del bien común.',
      secondContent: 'A su vez, en COSPUD sumamos valores propios que refuerzan nuestra identidad: el diálogo abierto y respetuoso, la excelencia en la calidad de los servicios, la innovación constante, el trabajo en equipo, el compromiso con nuestra comunidad y la honestidad en cada acción.'
    },
    {
      title: 'Somos voz, somos COSPUD',
      color: 'somos',
      mainContent: 'Este lema refleja lo que creemos y lo que somos. En nuestra Cooperativa, tu voz importa: cada opinión tiene valor y cada palabra encuentra su lugar.',
      secondContent: 'Porque sabemos que el diálogo es el camino para crecer, trabajamos con una comunicación abierta y respetuosa.Es así como podemos escucharnos, resolver juntos los desafíos y alcanzar objetivos comunes que beneficien a toda la comunidad.'
    }
  ];

  activeIndex: number = this.tabs.length - 1;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
