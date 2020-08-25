import { VideoSubCategory } from './../../pages/videos/dto/video-sub-category-dto';
import { Video } from './../../pages/videos/dto/video-dto';
import { VideoMainCategory } from './../../pages/videos/dto/video-main-category-dto';
import { VideoResourceService } from './video-resource.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(
    private videoResourceService: VideoResourceService
  ) { }
  findAllCategories(): Observable<VideoMainCategory[]> {
    const videoCategories = this.videoResourceService.findAllCategories().pipe(map(res => {
    return res;
    }));
    return videoCategories;
  }
  findAllVideoSubCategories(): Observable<VideoSubCategory[]> {
    const videoSubCategories = this.videoResourceService.findAllVideoSubCategories().pipe(map(res => {
    return res;
    }));
    return videoSubCategories;
  }
  findAllByCategory(): Observable<Video[]> {
    const videos = this.videoResourceService.findAllByCategory().pipe(map(res => {
    return res;
    }));
    return videos;
  }
  create(video: Video): Observable<Video> {
    const result = this.videoResourceService.create(video).pipe(map(res => {
     return res;
    }));
    return result;
 }
 createVideoSubCategory(video: VideoSubCategory): Observable<VideoSubCategory> {
  const result = this.videoResourceService.createSubCategory(video).pipe(map(res => {
   return res;
  }));
  return result;
}
}
