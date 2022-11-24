import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {PhotoInterface} from "@app/core/interfaces/photo.interface";
import {PaginationInterface} from "@app/shared/types/pagination.interface";

@Injectable()
export class PhotoService {

  constructor(private readonly http: HttpClient) { }

  getPhotos(pagination: PaginationInterface) : Observable<PhotoInterface[]> {
    const rand = Math.floor( Math.random() * 200 + 100);
    return this.http.get<PhotoInterface[]>(`/v2/list?page=${pagination.page}&limit=${pagination.limit}`)
      .pipe(
        delay(rand),
      );
  }

}

