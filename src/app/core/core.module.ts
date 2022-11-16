import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiUrlInterceptor} from "@app/core/interceptors/api-url.interceptor";
import {PhotoService} from "@app/core/services/photo/photo.service";
import {PhotoFavoriteService} from "@app/core/services/photo-favorite/photo-favorite.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true
    },
    PhotoService,
    PhotoFavoriteService
  ]
})
export class CoreModule { }
