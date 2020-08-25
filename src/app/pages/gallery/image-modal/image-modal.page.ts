import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavParams, ModalController, IonSlides } from '@ionic/angular';
import { ImageData } from '../images-data/image-data';
@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit, AfterViewInit {
  @ViewChild('slider', { static: false, read: ElementRef }) slider: ElementRef;
  @ViewChild('slider', { static: false }) mySwiper: IonSlides;
  images = ImageData;
  img;
  slidesOpts = {
    zoom: {
      maxRatio: 3
    },

  };
  constructor(
    private navParams: NavParams,
    private modalController: ModalController) {
    this.img = this.navParams.get('img');
    this.images = this.navParams.get('imgs');
    this.slidesOpts['initialSlide'] = this.navParams.get('index');


  }
  ngAfterViewInit() {
    // this.mySwiper.options = this.slidesOpts;
    setTimeout(
      () => {
        if (this.mySwiper) {
          this.mySwiper.update();
        }
      }
    );
  }
  ngOnInit() {

  }
  zoom(zoomIn: boolean) {
    const zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }
  ionModalDidPresent() {
    console.log('Its coming')
  }
  close() {
    this.modalController.dismiss();
  }
  prevSlide() {
    this.mySwiper.slidePrev();
  }
  /////////////banner slides next function///////////////
  nextSlide() {
      this.mySwiper.slideNext();
  }
}
