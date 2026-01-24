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
      icon: 'icons/sepelio.svg',
      downloadIcon: 'icons/requisitos.svg',
      image: 'images/servicio-sepelio.webp',
      download: 'assets/docs/requisitos-servicios.pdf'
    }
  ];

  downloadFile(url: string) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = url.split('/').pop() || 'archivo.pdf';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(err => {
        console.error('Error al descargar el archivo', err);
      });
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
