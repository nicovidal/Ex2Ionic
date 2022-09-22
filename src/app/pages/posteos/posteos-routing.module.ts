import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosteosPage } from './posteos.page';

const routes: Routes = [
  {
    path: '',
    component: PosteosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosteosPageRoutingModule {}
