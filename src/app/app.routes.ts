import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'somos-voz', loadComponent: () => import('./pages/somos/somos.component').then(m => m.SomosComponent) },
//   { path: 'trabaja-con-nosotros', loadComponent: () => import('./pages/trabaja-con-nosotros/trabaja-con-nosotros.component').then(m => m.TrabajaConNosotrosComponent) },
//   // { path: 'servicios', loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent) },
//   { path: 'autogestion', loadComponent: () => import('./pages/autogestion/autogestion.component').then(m => m.AutogestionComponent) }
// ];

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'somos', component: SomosComponent },
//   { path: '**', redirectTo: '' }
// ];

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'somos',
  //   loadChildren: () =>
  //     import('./pages/somos/somos.module').then(m => m.SomosModule)
  // },
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
  { path: '**', redirectTo: '' }
];

