import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/subscribe', pathMatch: 'full' },
  {
    path: 'subscribe',
    loadChildren: () =>
      import('./pages/subscribe/subscribe.module').then(m => m.SubscribeModule),
  },
  {
    path: 'async',
    loadChildren: () =>
      import('./pages/async/async.module').then(m => m.AsyncModule),
  },
  { path: '**', redirectTo: '/subscribe', pathMatch: 'full' },
];
