import { VideoSubCategory } from './dto/video-sub-category-dto';
import { VideoMainCategory } from './dto/video-main-category-dto';
import { VideoService } from './../../services/videos/video.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, AlertController, LoadingController, ModalController, IonRouterOutlet, ToastController, Config } from '@ionic/angular';
import { ConferenceData } from '../../providers/conference-data';
import { Router } from '@angular/router';
import { UserData } from '../../providers/user-data';
// import { Config } from 'protractor';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;
  ios: boolean;
  dayIndex = 0;
  queryText = '';
  categories: VideoMainCategory[] = [];
  selectedCategory: VideoMainCategory;
  segment = 1;
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    private videoService: VideoService
  ) { }

  ngOnInit() {
    // this.updateVideos();
    this.videoService.findAllCategories().subscribe(result => {
      this.categories = result;
      this.selectedCategory = this.categories.find(x => x.id === this.segment);
    });
    this.ios = this.config.get('mode') === 'ios';
  }

  updateVideos(event: CustomEvent) {
    this.selectedCategory = this.categories.find(x => x.id === Number.parseInt(this.segment.toString(), 10));
  }
}
