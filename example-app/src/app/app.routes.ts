import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/tabs/tabs.component').then((m) => m.TabsComponent),
    children: [
      {
        path: 'camera',
        loadComponent: () =>
          import('./pages/camera-view/camera-view.page').then(
            (m) => m.CameraSettingsPage,
          ),
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./pages/gallery/gallery.component').then(
            (m) => m.GalleryComponent,
          ),
      },
      {
        path: '',
        redirectTo: '/camera',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/camera',
  },
];
