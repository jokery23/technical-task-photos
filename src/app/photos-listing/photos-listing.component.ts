import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store, select} from '@ngrx/store';
import {
  BehaviorSubject, Observable,
} from "rxjs";

import {PhotoService} from "@app/core/services/photo/photo.service";
import {PhotoInterface} from "@app/core/interfaces/photo.interface";
import {PhotoFavoriteService} from "@app/core/services/photo-favorite/photo-favorite.service";
import {photosSelector} from "@app/photos-listing/store/selectors";
import {
  incrementPageAction,
  loadPhotosAction,
  resetPhotosAction
} from "@app/photos-listing/store/actions/load-photos.action";


@Component({
  selector: 'app-photos-listing',
  templateUrl: './photos-listing.component.html',
  styleUrls: ['./photos-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosListingComponent implements OnInit, OnDestroy {

  photos$: Observable<PhotoInterface[]> | undefined;
  page$ = new BehaviorSubject<number>(0);

  constructor(
    private readonly router: Router,
    private readonly photoFavoriteService: PhotoFavoriteService,
    private readonly photoService: PhotoService,
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.initLoading();
    this.initValues();
  }

  initLoading(): void {
    // this.store.dispatch(loadPhotosAction())
  }

  initValues(): void {
    this.photos$ = this.store.pipe(select(photosSelector))
  }

  onScroll(_: unknown): void {
    this.store.dispatch(loadPhotosAction())
    this.store.dispatch(incrementPageAction());
  }

  toggleFavorite(photo: PhotoInterface): void {
    // this.photoFavoriteService.toggle(photo);
  }

  /*private loadPage(page: number = 1): void {
    this.photoService.getPhotos(page)
      .pipe(
        take(1),
      )
      .subscribe(photos => {
        this.photos$.next([...this.photos$.getValue(), ...photos]);
        this.page$.next(page);
    });
  }*/

  ngOnDestroy(): void {
    this.store.dispatch(resetPhotosAction())
  }


}
