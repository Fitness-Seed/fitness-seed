import { VideoSubCategory } from './../dto/video-sub-category-dto';
import { Video } from './../dto/video-dto';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-videos',
  templateUrl: './view-videos.component.html',
  styleUrls: ['./view-videos.component.scss']
})
export class ViewVideosComponent implements OnInit {
  subCategory: VideoSubCategory;
  videos: Video[];
  constructor(
    navParams: NavParams,
    public modalController: ModalController,
    public NavCtrl: NavController,
    private sanitiser: DomSanitizer,
  ) {
    this.subCategory = navParams.get('sub_category');
    if (this.subCategory) {
      this.videos = this.subCategory.videos;
    }

  }

  ngOnInit() {

  }
  goToSubCategory() {
    this.NavCtrl.navigateForward("grid-subcategory");
  }
  dismiss(result) {
    this.modalController.dismiss({ videoUrl: result });
  }
  url(url: string) {
    return this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }
}
