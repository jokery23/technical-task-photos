import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { PhotosViewComponent } from './components/photos-view/photos-view.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    PhotosListComponent,
    InfiniteScrollComponent,
    PhotosViewComponent
  ],
  exports: [
    PhotosListComponent,
    InfiniteScrollComponent,
    PhotosViewComponent
  ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class SharedModule { }
