import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {PhotoInterface} from "@app/core/interfaces/photo.interface";

@Injectable()
export class PhotoService {

  constructor(private readonly http: HttpClient) { }

  getPhotos(page = 1, limit = 9) : Observable<PhotoInterface[]> {
    const rand = Math.floor( Math.random() * 200 + 100);
    return this.http.get<PhotoInterface[]>(`/v2/list?page=${page}&limit=${limit}`)
      .pipe(
        // tap(() => console.log(`Page = ${page}, delay = ${rand}`) ),
        delay(rand),
      );
  }

}

