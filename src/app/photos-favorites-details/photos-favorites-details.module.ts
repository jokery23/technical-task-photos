import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { PhotosFavoritesDetailsComponent } from './photos-favorites-details.component';
import {SharedModule} from "@app/shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: PhotosFavoritesDetailsComponent,
  }
];

@NgModule({
  declarations: [
    PhotosFavoritesDetailsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
  exports: [RouterModule]
})
export class PhotosFavoritesDetailsModule { }
