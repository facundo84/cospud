import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-somos-voz',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './somos-voz.component.html',
  styleUrl: './somos-voz.component.scss'
})
export class SomosVozComponent {
  baseUrl = '';
  
  constructor(@Inject(DOCUMENT) private document: Document) {
    const base = this.document.querySelector('base')?.getAttribute('href');
    this.baseUrl = base ?? '/';
  }

  ngAfterViewInit() {
    const section = document.querySelector('.somos-voz') as HTMLElement;
  
    if (!section) return;
  
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bg = section.dataset['bg'];
            if (bg) {
              section.style.backgroundImage = `url(${bg})`;
            }
            obs.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
  
    observer.observe(section);
  }

}
