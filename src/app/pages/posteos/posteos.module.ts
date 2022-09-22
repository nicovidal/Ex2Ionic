import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosteosPageRoutingModule } from './posteos-routing.module';

import { PosteosPage } from './posteos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosteosPageRoutingModule
  ],
  declarations: [PosteosPage]
})
export class PosteosPageModule {}
