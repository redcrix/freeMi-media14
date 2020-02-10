import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpNav1PageRoutingModule } from './sign-up-nav1-routing.module';

import { SignUpNav1Page } from './sign-up-nav1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpNav1PageRoutingModule
  ],
  declarations: [SignUpNav1Page]
})
export class SignUpNav1PageModule {}
