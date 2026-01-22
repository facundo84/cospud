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

  // scrollToServicios(event: Event) {
  //   event.preventDefault();
  //   const section = document.getElementById('servicios');
  //   section?.scrollIntoView({ behavior: 'smooth' });
  // }  

  goToServicios() {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      // Ya estamos en home → solo scrollea
      this.scrollToServicios();
    } else {
      // Estamos en otra ruta → navegamos primero
      this.router.navigate(['/']).then(() => {
        // Esperamos a que termine la navegación
        setTimeout(() => this.scrollToServicios(), 0);
      });
    }
  }

  scrollToServicios() {
    const section = document.getElementById('servicios');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

}
