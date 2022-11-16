import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {environment} from "@env/environment";
import {PhotoInterface} from "@app/core/interfaces/photo.interface";

@Component({
  selector: 'app-photos-view',
  templateUrl: './photos-view.component.html',
  styleUrls: ['./photos-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosViewComponent implements OnInit {

  @Input()
  photo: PhotoInterface | null = null;

  @Output()
  removeFavoriteClicked = new EventEmitter();

  baseUrl = '';

  constructor() {
    this.baseUrl = environment.apiUrl;
  }

  ngOnInit(): void {

  }

  onRemoveFavoriteClicked(photo: PhotoInterface): void {
    this.removeFavoriteClicked.emit(photo);
  }

}
