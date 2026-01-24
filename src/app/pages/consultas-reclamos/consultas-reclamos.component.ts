import { Component } from '@angular/core';

@Component({
  selector: 'app-consultas-reclamos',
  standalone: true,
  imports: [],
  templateUrl: './consultas-reclamos.component.html',
  styleUrl: './consultas-reclamos.component.scss'
})
export class ConsultasReclamosComponent {

  ngAfterViewInit() {
    const section = document.querySelector('.complaint') as HTMLElement;
    const bg = section?.dataset['bg'];
    const bgDiv = section?.querySelector('.complaint-hero-bg') as HTMLElement;

    if (!section || !bg || !bgDiv) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          bgDiv.style.backgroundImage = `url(${bg})`;
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(section);
  }

}
