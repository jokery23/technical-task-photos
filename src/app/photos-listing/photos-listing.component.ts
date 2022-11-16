import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PhotoService} from "@app/core/services/photo/photo.service";
import {
  BehaviorSubject,
  Subject,
  take,
} from "rxjs";
import {PhotoInterface} from "@app/core/interfaces/photo.interface";
import {PhotoFavoriteService} from "@app/core/services/photo-favorite/photo-favorite.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-photos-listing',
  templateUrl: './photos-listing.component.html',
  styleUrls: ['./photos-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosListingComponent implements OnInit {

  photos$ = new BehaviorSubject<PhotoInterface[]>([]);
  page$ = new BehaviorSubject<number>(0);
  destroy$ = new Subject<boolean>();

  constructor(
    private readonly router: Router,
    private readonly photoFavoriteService: PhotoFavoriteService,
    private readonly photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.loadPage(1);
  }

  loadPage(page: number = 1): void {
    this.photoService.getPhotos(page)
      .pipe(
        take(1),
      )
      .subscribe(photos => {
        this.photos$.next([...this.photos$.getValue(), ...photos]);
        this.page$.next(page);
    });
  }

  onScroll(_: unknown): void {
    if (this.page$.getValue() === 0) {
      return;
    }
    this.loadPage(this.page$.getValue() + 1)
  }

  toggleFavorite(photo: PhotoInterface): void {
    this.photoFavoriteService.toggle(photo);
  }

}
