import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  baseUrl = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
    const base = this.document.querySelector('base')?.getAttribute('href');
    this.baseUrl = base ?? '/';
  }

  ngAfterViewInit() {
    const section = document.querySelector('.social-section') as HTMLElement;
    const bg = section?.dataset['bg'];
    const bgDiv = section?.querySelector('.social-bg') as HTMLElement;
  
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
