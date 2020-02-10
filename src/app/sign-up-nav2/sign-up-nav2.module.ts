import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpNav2PageRoutingModule } from './sign-up-nav2-routing.module';

import { SignUpNav2Page } from './sign-up-nav2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpNav2PageRoutingModule
  ],
  declarations: [SignUpNav2Page]
})
export class SignUpNav2PageModule {}
