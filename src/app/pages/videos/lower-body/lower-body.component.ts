import { VideoMainCategory } from './../dto/video-main-category-dto';
import { Component, OnInit, Input } from '@angular/core';
import { CategoryData } from '../models/category-data';
import { ModalController } from '@ionic/angular';
import { NewVideoComponent } from '../new-video/new-video.component';
import { ViewVideosComponent } from '../view-videos/view-videos.component';

@Component({
  selector: 'app-lower-body',
  templateUrl: './lower-body.component.html',
  styleUrls: ['./lower-body.component.scss'],
})
export class LowerBodyComponent implements OnInit {
  @Input() category: VideoMainCategory;
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}
  async viewVideos(subCategoryId: string){
    const modal = await this.modalController.create({
      component: ViewVideosComponent,
      cssClass: 'view-videos',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      componentProps: { main_category_id: 'lower-body', sub_category_id: subCategoryId }
    });
    modal.onDidDismiss().then(data => {
      console.log(data);
    });
    return await modal.present();
  }
  async uploadNewVideo() {
    const modal = await this.modalController.create({
      component: NewVideoComponent,
      cssClass: 'my-custom-class height-100',
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
      componentProps: { main_category_id: 'lower-body' }
    });
    modal.onDidDismiss().then(data => {
      console.log(data);
    });
    return await modal.present();
  }
}
