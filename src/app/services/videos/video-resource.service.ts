import { Video} from './../../pages/videos/dto/video-dto';
import { VideoSubCategory } from './../../pages/videos/dto/video-sub-category-dto';
import { Injectable } from '@angular/core';
import { VideoMainCategory } from '../../pages/videos/dto/video-main-category-dto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoResourceService {

  options: any = {
    observe: 'response',
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }
  findAllCategories(): Observable<VideoMainCategory[]>  {
    const observable = this.httpClient.request('get', 'http://localhost:3000/videos/findAllVideoMainCategories', this.options);
    const result = observable.pipe(map((res: any) => {
      return res.body as VideoMainCategory[];
    }));
    return result;
  }
  findAllVideoSubCategories(): Observable<VideoSubCategory[]>  {
    const observable = this.httpClient.request('get', 'http://localhost:3000/videos/findAllVideoSubCategories', this.options);
    const result = observable.pipe(map((res: any) => {
      return res.body as VideoSubCategory[];
    }));
    return result;
  }
  findAllByCategory(): Observable<Video[]>  {
    const observable = this.httpClient.request('get', 'http://localhost:3000/videos/findAllByCategory', this.options);
    const result = observable.pipe(map((res: any) => {
      return res.body as Video[];
    }));
    return result;
  }
  create(image: Video): Observable<Video> {
    const content = JSON.stringify(image);
    const options: any = {
      body: content,
      observe: 'response',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json'
      })
    };
    const result = this.httpClient.request('post', 'http://localhost:3000/videos/create', options)
    .pipe(map((res: any) => {
      return res.body as Video;
    }), catchError(err => {
      throw new Error('error in source. Details: ' + err);
    }));
    return result;
  }
  createSubCategory(videoSubCategory: VideoSubCategory): Observable<VideoSubCategory> {
    const content = JSON.stringify(videoSubCategory);
    const options: any = {
      body: content,
      observe: 'response',
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json'
      })
    };
    const result = this.httpClient.request('post', 'http://localhost:3000/videos/createSubCategory', options)
    .pipe(map((res: any) => {
      return res.body as VideoSubCategory;
    }), catchError(err => {
      throw new Error('error in source. Details: ' + err);
    }));
    return result;
  }
}
