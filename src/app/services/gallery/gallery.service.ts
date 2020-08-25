
import { Injectable } from '@angular/core';
import { GalleryResourceService } from './gallery-resource.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Media } from '../../pages/models/media/media-model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private galleryResourceService: GalleryResourceService) { }
  findAll(): Observable<Media[]> {
    const images = this.galleryResourceService.findAll().pipe(map(res => {
     return res;
    }));
    return images;
  }
  create(image: Media): Observable<Media> {
     const result = this.galleryResourceService.create(image).pipe(map(res => {
      return res;
     }));
     return result;
  }
}
