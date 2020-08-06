import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'welcome.html',
  styleUrls: ['./welcome.scss'],
})
export class WelcomePage {
  showSkip = true;

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
  ) {}

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/schedule', { replaceUrl: true })
      .then(() => this.storage.set('ion_did_tutorial', true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }
  // Fired when the component routing to is about to animate into view
  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/schedule', { replaceUrl: true });
      }
    });
    console.log('View about to enter');
    this.menu.enable(false);
  }
  // Fired when the component routing to has finished animating
  ionViewDidEnter() {
    console.log('View Entered');
    this.slides.startAutoplay();
  }
  // Fired when the component routing from is about to animate.
  ionViewWillLeave() {
    console.log('View about to leave');
  }
  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    console.log('View left');
    this.menu.enable(true);
  }
  prevSlide() {
    this.slides.slidePrev();
  }
  // banner slides next function/
  nextSlide() {
    this.slides.slideNext();
  }
}
