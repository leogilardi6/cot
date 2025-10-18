import { Routes } from '@angular/router';

export const LayoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/home/home').then((m) => m.Home),
  },
  {
    path: 'personal',
    loadComponent: () => import('../pages/personal/personal').then((m) => m.Personal),
  },
  {
    path: 'personal/:nombre',
    loadComponent: () => import('../pages/personal/medico/medico').then((m) => m.Medico),
  },
  {
    path: 'contacto',
    loadComponent: () => import('../pages/contacto/contacto').then((m) => m.Contacto),
  },
  {
    path: 'noticias',
    loadComponent: () => import('../pages/noticias/noticias').then((m) => m.Noticias),
  },
  {
    path: 'institucional',
    loadComponent: () => import('../pages/quienes-somos/quienes-somos').then((m) => m.QuienesSomos),
  },
  {
    path: 'servicios',
    loadComponent: () => import('../pages/servicios/servicios').then((m) => m.Servicios),
  },
  {
    path: 'especialidades',
    loadComponent: () => import('../pages/patologias/patologias').then((m) => m.Patologias),
  },
  {
    path: 'especialidades/:id',
    loadComponent: () => import('../pages/patologias/patologia/patologia').then((m) => m.Patologia),
  },
  {
    path: 'especialidades/:id/:seccion',
    loadComponent: () => import('../pages/patologias/patologia/patologia').then((m) => m.Patologia),
  },
];
