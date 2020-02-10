import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpNav1Page } from './sign-up-nav1.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpNav1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpNav1PageRoutingModule {}
