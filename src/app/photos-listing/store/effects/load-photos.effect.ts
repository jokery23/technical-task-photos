import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, withLatestFrom} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'

import {of} from 'rxjs'
import {PhotoService} from "@app/core/services/photo/photo.service";
import {loadPhotosAction, loadPhotosSuccessAction, loadPhotosFailureAction} from "../actions/load-photos.action";
import {PhotoInterface} from "../../types/photo.interface";
import {Store} from "@ngrx/store";
import {AppStateInterface} from "@app/shared/types/app-state.interface";
import {paginationSelector} from "@app/photos-listing/store/selectors";

@Injectable()
export class LoadPhotosEffect {

  photos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotosAction),
      withLatestFrom(this.store.select(paginationSelector)),

      switchMap(([action, pagination]) => {
        return this.photosService.getPhotos(pagination).pipe(
          map((photos: PhotoInterface[]) => {
            return loadPhotosSuccessAction({photos})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loadPhotosFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private photosService: PhotoService, private store: Store<AppStateInterface>) {}
}
