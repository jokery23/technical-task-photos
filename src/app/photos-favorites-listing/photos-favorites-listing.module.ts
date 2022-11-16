import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { PhotosFavoritesListingComponent } from './photos-favorites-listing.component';
import {SharedModule} from "@app/shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: PhotosFavoritesListingComponent
  }
];

@NgModule({
  declarations: [
    PhotosFavoritesListingComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
  exports: [RouterModule]
})
export class PhotosFavoritesListingModule { }
