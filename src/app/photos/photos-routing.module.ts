import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosComponent } from './photos.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('../photos-listing/photos-listing.module').then(m => m.PhotosListingModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../photos-favorites-listing/photos-favorites-listing.module').then(m => m.PhotosFavoritesListingModule)
      },
      {
        path: 'photos/:id',
        loadChildren: () => import('../photos-favorites-details/photos-favorites-details.module').then(m => m.PhotosFavoritesDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
