import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {PhotoFavoriteService} from "@app/core/services/photo-favorite/photo-favorite.service";
import {PhotoInterface} from "@app/core/interfaces/photo.interface";
import {BehaviorSubject, Observable, Subject, take, takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-photos-favorites-listing',
  templateUrl: './photos-favorites-listing.component.html',
  styleUrls: ['./photos-favorites-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosFavoritesListingComponent implements OnInit, OnDestroy {

  photoFavorites$ = new BehaviorSubject<PhotoInterface[]>([]);
  destroy$ = new Subject<boolean>();

  constructor(
    private readonly router: Router,
    private readonly photoFavoriteService: PhotoFavoriteService
  ) {

  }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.photoFavoriteService.favorites$
      .pipe(
        take(1)
      )
      .subscribe(photoFavorites => {
        this.photoFavorites$.next(photoFavorites);
    })
  }

  async openDetails(photo: PhotoInterface): Promise<void> {
    await this.router.navigate(['photos', photo.id])
  }

  toggleFavorite(photo: PhotoInterface): void {
    this.photoFavoriteService.toggle(photo);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
