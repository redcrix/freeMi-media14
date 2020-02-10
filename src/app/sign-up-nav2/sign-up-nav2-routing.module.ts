import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpNav2Page } from './sign-up-nav2.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpNav2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpNav2PageRoutingModule {}
