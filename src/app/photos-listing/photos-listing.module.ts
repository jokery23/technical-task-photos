import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { PhotosListingComponent } from './photos-listing.component';
import {SharedModule} from "@app/shared/shared.module";
import {CoreModule} from "@app/core/core.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const routes: Routes = [
  {
    path: '',
    component: PhotosListingComponent
  }
];

@NgModule({
  declarations: [
    PhotosListingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CoreModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule
  ]
})
export class PhotosListingModule { }
