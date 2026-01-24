import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileOpen = false;
  showTextLogo = false;

  constructor(private router: Router) {}

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  goToServicios() {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToServicios();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToServicios(), 0);
      });
    }
  }

  scrollToServicios() {
    const section = document.getElementById('servicios');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

}
