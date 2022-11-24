import {createReducer, on, Action} from '@ngrx/store';
import {PhotosStateInterface} from "../types/photos-state.interface";
import {
  incrementPageAction,
  loadPhotosAction,
  loadPhotosFailureAction,
  loadPhotosSuccessAction,
  resetPhotosAction
} from "./actions/load-photos.action";

const initialState: PhotosStateInterface = {
  photos: [],
  pagination: {
    page: 1,
    limit: 12,
  },
  errors: [],
  isLoading: false
}

const photosReducer = createReducer(
  initialState,
  on(
    resetPhotosAction,
    (state): PhotosStateInterface => ({
      ...state,
      ...initialState,
    })
  ),
  on(
    incrementPageAction,
    (state): PhotosStateInterface => ({
      ...state,

      pagination: {...state.pagination, page: (state.pagination.page + 1)}
    })
  ),
  on(
    loadPhotosAction,
    (state): PhotosStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    loadPhotosSuccessAction,
    (state, action): PhotosStateInterface => ({
      ...state,
      photos: [...state.photos, ...action.photos],
      isLoading: false,
    })
  ),
  on(
    loadPhotosFailureAction,
    (state, action): PhotosStateInterface => ({
      ...state,
      errors: action.errors,
      isLoading: false,
    })
  )
);

export function reducers(state: PhotosStateInterface, action: Action) {
  return photosReducer(state, action);
}
