import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SomosVozComponent } from '../somos-voz/somos-voz.component';
import { ServicesGridComponent } from '../services/services-grid/services-grid.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { SocialComponent } from '../social/social.component';
import { SocialWidgetComponent } from '../social-widget/social-widget.component';
import { PaymentMethodsComponent } from '../payment-methods/payment-methods.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ServicesGridComponent,
    SomosVozComponent,
    QuickActionsComponent,
    SocialComponent,
    SocialWidgetComponent,
    PaymentMethodsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
