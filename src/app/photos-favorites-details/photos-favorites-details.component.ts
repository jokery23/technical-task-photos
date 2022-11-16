import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PhotoFavoriteService} from "@app/core/services/photo-favorite/photo-favorite.service";
import {BehaviorSubject, switchMap} from "rxjs";
import {PhotoInterface} from "@app/core/interfaces/photo.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-photos-favorites-details',
  templateUrl: './photos-favorites-details.component.html',
  styleUrls: ['./photos-favorites-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosFavoritesDetailsComponent implements OnInit {

  photo$ = new BehaviorSubject<PhotoInterface | undefined>(undefined);

  constructor(
    private readonly photoFavoriteService: PhotoFavoriteService,
    private readonly activatedRouter: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        switchMap( ({id}) => {
          return this.photoFavoriteService.getFavorite(id);
        })
      ).subscribe( photo => {
        this.photo$.next(photo);
    })

  }

  async removeFavorite(photo: PhotoInterface): Promise<void> {
    this.photoFavoriteService.toggle(photo);
    await this.router.navigate(['favorites']);
  }

}
