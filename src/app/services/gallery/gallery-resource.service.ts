import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Media } from '../../pages/models/media/media-model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryResourceService {
  images: Observable<Media[]>;
  options: any = {
    observe: 'response',
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

   findAll(): Observable<Media[]>  {
    const observable = this.httpClient.request('get', 'http://localhost:3000/gallery/findAll', this.options);
    const result = observable.pipe(map((res: any) => {
      return res.body as Media[];
    }));
    return result;
  }
  create(image: Media): Observable<Media> {
    const content = JSON.stringify(image);
    const options: any = {
      body: content,
      observe: 'response',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json'
      })
    };
    const result = this.httpClient.request('post', 'http://localhost:3000/gallery/create', options)
    .pipe(map((res: any) => {
      return res.body as Media;
    }), catchError(err => {
      throw new Error('error in source. Details: ' + err);
    }));
    return result;
  }
}
