import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Lazy async modules
  {
    path: 'login', loadChildren: () => new Promise(resolve => {
      (require as any).ensure([], (require: any) => {
        resolve(require('./+login/login.module').LoginModule);
      });
    })
  },
  {
    path: 'register', loadChildren: () => new Promise(resolve => {
      (require as any).ensure([], (require: any) => {
        resolve(require('./+register/register.module').RegisterModule);
      });
    })
  },
  {
    path: 'profile', loadChildren: () => new Promise(resolve => {
      (require as any).ensure([], (require: any) => {
        resolve(require('./+profile/profile.module').ProfileModule);
      });
    })
  },
  {
    path: 'admin', loadChildren: () => new Promise(resolve => {
      (require as any).ensure([], (require: any) => {
        resolve(require('./+admin/admin.module').AdminModule);
      });
    })
  },
  {
    path: 'about', loadChildren: () => new Promise(resolve => {
      (require as any).ensure([], (require: any) => {
        resolve(require('./+about/about.module').AboutModule);
      });
    })
  },
  {
    path: 'examples', loadChildren: () => new Promise(resolve => {
      (require as any).ensure([], (require: any) => {
        resolve(require('./+examples/examples.module').ExamplesModule);
      });
    })
  },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);
