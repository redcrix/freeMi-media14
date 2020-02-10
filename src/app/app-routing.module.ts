import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'walk-through', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'walk-through',
    loadChildren: () => import('./walk-through/walk-through.module').then( m => m.WalkThroughPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-up-nav1',
    loadChildren: () => import('./sign-up-nav1/sign-up-nav1.module').then( m => m.SignUpNav1PageModule)
  },
  {
    path: 'sign-up-nav2',
    loadChildren: () => import('./sign-up-nav2/sign-up-nav2.module').then( m => m.SignUpNav2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
