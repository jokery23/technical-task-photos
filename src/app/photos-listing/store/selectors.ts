import {createFeatureSelector, createSelector} from '@ngrx/store'
import {PhotosStateInterface} from "../types/photos-state.interface";
import {AppStateInterface} from "@app/shared/types/app-state.interface";

const selectFeature = (appState: AppStateInterface): PhotosStateInterface => appState.photos;

const photosFeatureSelector = createFeatureSelector<
  PhotosStateInterface
  >('photos')

export const photosSelector = createSelector(
  photosFeatureSelector,
  (photosState: PhotosStateInterface) => photosState.photos
)

export const isLoadingSelector = createSelector(
  photosFeatureSelector,
  (photosState: PhotosStateInterface) => photosState.isLoading
)

export const paginationSelector = createSelector(
  photosFeatureSelector,
  (photosState: PhotosStateInterface) => photosState.pagination
)
