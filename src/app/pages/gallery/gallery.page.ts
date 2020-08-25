import { GalleryService } from './../../services/gallery/gallery.service';
import { ImageModalPage } from './image-modal/image-modal.page';
import { NewImageComponent } from './new-image/new-image.component';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { ModalController } from '@ionic/angular';
import { ImageData } from './images-data/image-data';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { Media } from '../models/media/media-model';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  images: Media[] = [];
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  photos = this.photoService.photos;
  slidesOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };
  isLoading = false;
  constructor(
    public photoService: PhotoService,
    public modalController: ModalController,
    private afStorage: AngularFireStorage,
    private galleryService: GalleryService

    ) {}
  ngOnInit() {
    this.isLoading = true;
    this.galleryService.findAll()
     .pipe(finalize(() => {
      this.isLoading = false;
     })).subscribe(res => {
       this.images = res;
     });

  }
  async openPreview(photo, i) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'view-image-modal',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
    componentProps: { img: photo, imgs: this.images, index: i }
    });
    modal.onDidDismiss().then((data: any) => {
      // console.log(data.url);
      this.images.push(data.url);
    });
    return await modal.present();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: NewImageComponent,
      cssClass: 'new-image-modal ion-overflow-hidden',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop()
      // componentProps: { player: player }
    });
    modal.onDidDismiss().then(data => {
      console.log(data);
    });
    return await modal.present();
  }
    ionModalWillPresent(){
    console.log('Its coming')
  }
}
