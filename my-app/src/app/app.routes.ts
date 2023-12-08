import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/general/home-page/home-page.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { ContactPageComponent } from './pages/general/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  // route 404 doit être insérée en dernier
  {
    path: '**',
    component: NotFoundComponent,
  },
];
