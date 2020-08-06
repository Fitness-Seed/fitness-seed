import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.scss'],
})
export class NewVideoComponent implements OnInit {
  player: any;
  constructor(
    navParams: NavParams,
    public viewCtrl: ModalController
  ) {
    this.player = navParams.get('player');
  }

  ngOnInit() {}
  dismiss() {
    this.viewCtrl.dismiss({age: 25});
  }
}
