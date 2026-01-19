import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AguaComponent } from './pages/service-details/agua/agua.component';
import { ElectricidadComponent } from './pages/service-details/electricidad/electricidad.component';
import { CableComponent } from './pages/service-details/cable/cable.component';
import { SepeliosComponent } from './pages/service-details/sepelios/sepelios.component';
import { ConsultasReclamosComponent } from './pages/consultas-reclamos/consultas-reclamos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'somos',
    loadChildren: () =>
      import('./pages/somos/somos.routes').then(m => m.SOMOS_ROUTES)
  },
  {
    path: 'trabaja-con-nosotros',
    loadChildren: () =>
      import('./pages/trabaja-con-nosotros/trabaja-con-somos.routes').then(m => m.TRABAJA_CON_NOSOTROS_ROUTES)
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./pages/servicios/servicios.routes').then(m => m.SERVICIOS_ROUTES)
  },
  {
    path: 'service-details/agua',
    component: AguaComponent
  },
  {
    path: 'service-details/electricidad',
    component: ElectricidadComponent
  },
  {
    path: 'service-details/telefonia',
    component: CableComponent
  },
  {
    path: 'service-details/cable',
    component: CableComponent
  },
  {
    path: 'service-details/internet',
    component: CableComponent
  },
  {
    path: 'service-details/sepelios',
    component: SepeliosComponent
  },
  {
    path: 'consultas-reclamos',
    component: ConsultasReclamosComponent
  },
  { path: '**', redirectTo: '' }
];

