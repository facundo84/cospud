import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.scss'
})
export class PaymentMethodsComponent {
  copyEmail(event: Event): void {
    event.preventDefault(); // evita navegación inmediata
  
    const email = 'tramitescospud@gmail.com';
  
    navigator.clipboard.writeText(email).then(() => {
      // abre el mail luego de copiar
      window.location.href = `mailto:${email}`;
    });
  }
  
}
