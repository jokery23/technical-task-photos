import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosFavoritesDetailsComponent } from './photos-favorites-details.component';

describe('PhotosFavoritesDetailsComponent', () => {
  let component: PhotosFavoritesDetailsComponent;
  let fixture: ComponentFixture<PhotosFavoritesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosFavoritesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosFavoritesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
