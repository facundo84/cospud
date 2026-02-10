import { Component } from '@angular/core';
import { NgForOf, Location } from '@angular/common';

@Component({
  selector: 'app-agua',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './agua.component.html',
  styleUrl: './agua.component.scss'
})
export class AguaComponent {

  constructor(private location: Location) {}

  services = [
    {
      id: 'agua',
      title: 'Agua',
      icon: 'icons/agua.svg',
      downloadIcon: 'icons/requisitos.svg',
      image: 'images/servicio-agua.webp',
      download: 'docs/requisitos-servicios.pdf'
    }
  ];

  downloadFile(relativeUrl: string) {
    const baseHref = this.location.prepareExternalUrl('');
    const url = `${baseHref}${relativeUrl}`;

    window.open(url, '_blank');
  }

  ngAfterViewInit() {
    const headers = document.querySelectorAll<HTMLElement>('.service-header[data-bg]');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const bg = el.dataset['bg'];

          if (bg) {
            el.style.backgroundImage = `url(${bg})`;
            el.removeAttribute('data-bg');
            observer.unobserve(el);
          }
        }
      });
    }, {
      rootMargin: '200px'
    });

    headers.forEach(el => observer.observe(el));
  }
}

