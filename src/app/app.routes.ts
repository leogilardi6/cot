import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { LayoutRoutes } from './layout/layout.routes';

export const routes: Routes = [
  { path: '', component: Layout, children: LayoutRoutes },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
