import { ViewVideosComponent } from './../view-videos/view-videos.component';
import { NewVideoComponent } from './../new-video/new-video.component';
import { ActionSheetController, Platform, AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Media } from '@ionic-native/media/ngx';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { File } from '@ionic-native/file/ngx';
import * as RecordRTC from 'recordrtc';
import { CategoryData } from '../models/category-data';
import { VideoMainCategory } from '../dto/video-main-category-dto';
const MEDIA_FOLDER_NAME = 'my-media';

@Component({
  selector: 'app-upper-body',
  templateUrl: './upper-body.component.html',
  styleUrls: ['./upper-body.component.scss'],
})
export class UpperBodyComponent implements OnInit, AfterViewInit {
  @ViewChild('video', { static: false }) video: any;
  @Input() category: VideoMainCategory;
  files = [];
  stream: MediaStream;
  private recordRTC = RecordRTC;
  constructor(
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    private alertController: AlertController,
    public modalController: ModalController

  ) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      // 'hybrid' detects both Cordova and Capacitor
      if (this.platform.is('hybrid')) {
      } else {

      }
    });
  }
  ngAfterViewInit() {
    // set the initial state of the video
    // const video: HTMLVideoElement = this.video.nativeElement;
    // video.muted = false;
    // video.controls = true;
    // video.autoplay = false;
  }
  async viewVideos(subCategoryId: number){
    const subCategory = this.category.subCategories.find(x => x.id === subCategoryId);
    const modal = await this.modalController.create({
      component: ViewVideosComponent,
      cssClass: 'view-videos',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      componentProps: { main_category: this.category, sub_category: subCategory}
    });
    modal.onDidDismiss().then(data => {
      console.log(data);
    });
    return await modal.present();
  }
  async uploadNewVideo() {
    const modal = await this.modalController.create({
      component: NewVideoComponent,
      cssClass: 'view-videos',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      componentProps: {  main_category: this.category }
    });
    modal.onDidDismiss().then(data => {
      console.log(data);
    });
    return await modal.present();
  }
}
