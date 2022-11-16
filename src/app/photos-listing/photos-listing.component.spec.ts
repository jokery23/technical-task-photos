import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosListingComponent } from './photos-listing.component';

describe('PhotosListComponent', () => {
  let component: PhotosListingComponent;
  let fixture: ComponentFixture<PhotosListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
