import { TestBed } from '@angular/core/testing';

import { PhotoFavoriteService } from './photo-favorite.service';

describe('PhotoFavoriteService', () => {
  let service: PhotoFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
