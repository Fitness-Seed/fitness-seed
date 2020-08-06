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
  segment = 'upper-body';
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
    public config: Config
  ) { }

  ngOnInit() {
    // this.updateVideos();
    this.ios = this.config.get('mode') === 'ios';
  }
  updateVideos(event: CustomEvent) {
    // Close any open sliding items when the schedule updates
    // if (this.scheduleList) {
    //   this.scheduleList.closeSlidingItems();
    // }

    // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
    //   this.shownSessions = data.shownSessions;
    //   this.groups = data.groups;
    // });
    console.log(event.detail.value);
  }
}
