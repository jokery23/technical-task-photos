import {createAction, props} from '@ngrx/store';
import {ActionTypes} from "./action-types";
import {PhotoInterface} from "../../types/photo.interface";

export const resetPhotosAction = createAction(
  ActionTypes.RESET_PHOTOS
)

export const incrementPageAction = createAction(
  ActionTypes.INCREMENT_PAGE
)

export const decrementPageAction = createAction(
  ActionTypes.DECREMENT_PAGE
)

export const loadPhotosAction = createAction(
  ActionTypes.LOAD_PHOTOS,
)

export const loadPhotosSuccessAction = createAction(
  ActionTypes.LOAD_PHOTOS_SUCCESS,
  props<{photos: PhotoInterface[]}>()
)

export const loadPhotosFailureAction = createAction(
  ActionTypes.LOAD_PHOTOS_FAILURE,
  props<{errors: string[]}>()
)
