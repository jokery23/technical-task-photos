import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from "@env/environment";
import {PhotoInterface} from "@app/core/interfaces/photo.interface";

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosListComponent implements OnInit {

  @Input()
  photos: PhotoInterface[] = [];

  @Output()
  imageClicked = new EventEmitter();

  @Output()
  favoriteClicked = new EventEmitter();

  baseUrl = '';

  constructor() {
    this.baseUrl = environment.apiUrl;
  }

  ngOnInit(): void {
  }

  trackById(index: number, photo: PhotoInterface) : number {
    return photo.id;
  }

  onImageClick(photo: PhotoInterface): void {
    this.imageClicked.emit(photo);
  }

  onFavoriteClick(photo: PhotoInterface): void {
    this.favoriteClicked.emit(photo);
  }

}
