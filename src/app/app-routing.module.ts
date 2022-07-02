import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToLogin },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToHome },
  },
  {
    path: 'akun',
    loadChildren: () =>
      import('./akun/akun.module').then((m) => m.AkunPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToLogin },
  },
  {
    path: 'kategori',
    loadChildren: () => import('./kategori/kategori.module').then( m => m.KategoriPageModule)
  },
  {
    path: 'kategori-add',
    loadChildren: () => import('./kategori-add/kategori-add.module').then( m => m.KategoriAddPageModule)
  },
  {
    path: 'kategori-edit/:id',
    loadChildren: () => import('./kategori-edit/kategori-edit.module').then( m => m.KategoriEditPageModule)
  },
  {
    path: 'preview',
    loadChildren: () => import('./preview/preview.module').then( m => m.PreviewPageModule)
  },
  {
    path: 'race',
    loadChildren: () => import('./race/race.module').then( m => m.RacePageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
