import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosFavoritesListingComponent } from './photos-favorites-listing.component';

describe('PhotosFavoritesListComponent', () => {
  let component: PhotosFavoritesListingComponent;
  let fixture: ComponentFixture<PhotosFavoritesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosFavoritesListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosFavoritesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
