import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { PhotosListingComponent } from './photos-listing.component';
import {SharedModule} from "@app/shared/shared.module";
import {CoreModule} from "@app/core/core.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {reducers} from "./store/reducers";
import {LoadPhotosEffect} from "@app/photos-listing/store/effects/load-photos.effect";

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
    MatProgressSpinnerModule,
    StoreModule.forFeature('photos', reducers),
    EffectsModule.forFeature([LoadPhotosEffect])
  ],
  exports: [
    RouterModule
  ]
})
export class PhotosListingModule { }
