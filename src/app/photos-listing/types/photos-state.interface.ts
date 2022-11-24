import {PhotoInterface} from "./photo.interface";
import {PaginationInterface} from "@app/shared/types/pagination.interface";

export interface PhotosStateInterface {
  photos: PhotoInterface[];
  errors: string[];
  pagination: PaginationInterface;
  isLoading: boolean;
}
