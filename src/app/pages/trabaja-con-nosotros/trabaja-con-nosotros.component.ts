import { Component } from '@angular/core';

@Component({
  selector: 'app-trabaja-con-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './trabaja-con-nosotros.component.html',
  styleUrl: './trabaja-con-nosotros.component.scss'
})
export class TrabajaConNosotrosComponent {
  ngAfterViewInit() {
    const section = document.querySelector('.work-with-us') as HTMLElement;
    if (!section) return;

    const bgDiv = section.querySelector('.work-hero-bg') as HTMLElement;
    const bg = section.dataset['bg'];

    if (!bg || !bgDiv) return;

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
