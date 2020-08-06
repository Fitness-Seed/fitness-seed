import { NewVideoComponent } from './../new-video/new-video.component';
import { ActionSheetController, Platform, AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Media } from '@ionic-native/media/ngx';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { File } from '@ionic-native/file/ngx';
import * as RecordRTC from 'recordrtc';
const MEDIA_FOLDER_NAME = 'my-media';
@Component({
  selector: 'app-upper-body',
  templateUrl: './upper-body.component.html',
  styleUrls: ['./upper-body.component.scss'],
})
export class UpperBodyComponent implements OnInit, AfterViewInit {
  @ViewChild('video', { static: false }) video: any;
  files = [];
  stream: MediaStream;
  private recordRTC = RecordRTC;
  playersList: any[] = [{
    name: 'MS Dhoni',
    image: 'https://iplstatic.s3.amazonaws.com/players/284/1.png',
    role: "Wicketkeeper batsman",
    batting_style: "Right-handed",
    bowling_style: "Right-arm medium",
    nationality: "Indian",
    matches: 183,
    runs: 4246,
    fifties: 22,
    fours: 287,
    sixes: 196
  },
  {
    name: 'Kedar Jadhav',
    image: 'https://iplstatic.s3.amazonaws.com/players/284/297.png',
    role: "Batsman",
    batting_style: "Right-handed",
    bowling_style: "Right-arm off-spin",
    nationality: "Indian",
    matches: 73,
    runs: 1052,
    fifties: 4,
    fours: 90,
    sixes: 37
  },
  {
    name: 'Dwayne Bravo',
    image: 'https://iplstatic.s3.amazonaws.com/players/284/25.png',
    role: "All-rounder",
    batting_style: "Right-handed",
    bowling_style: "Right-arm medium fast",
    nationality: "West Indian",
    matches: 126,
    runs: 1442,
    fifties: 5,
    fours: 114,
    sixes: 60
  }];
  constructor(
    private media: Media,
    private file: File,
    private photoViewer: PhotoViewer,
    private mediaCapture: MediaCapture,
    private streamingMedia: StreamingMedia,
    private imagePicker: ImagePicker,
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
        const path = this.file.dataDirectory;
        this.file.checkDir(path, MEDIA_FOLDER_NAME).then(() => {
          this.loadFiles();
        }, err => {
          this.file.createDir(path, MEDIA_FOLDER_NAME, false).then(() => {
            this.loadFiles();
          });
        });
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
  async presentModal(player) {
    const modal = await this.modalController.create({
      component: NewVideoComponent,
      cssClass: 'my-custom-class',
      // componentProps: { player: player }
    });
    modal.onDidDismiss().then(data => {
      console.log(data);
    });
    return await modal.present();
  }
  loadFiles() {
    this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(files => {
      this.files = files;
      console.log('files: ', files);
    });
  }
  openFile(f) {

  }
  deleteFile(f) {

  }
  async selectMedia() {
    const actionSheet = await this.actionSheetController.create({
      header: 'What would you like to add ?',
      buttons: [
        {
          text: 'Capture Image',
          handler: () => {
            this.captureImage();
          }
        },
        {
          text: 'Record Video',
          handler: () => {
            this.recordVideo();
          }
        },
        {
          text: 'Record Audio',
          handler: () => {
            this.recordAudio();
          }
        },
        {
          text: 'Load Multiple',
          handler: () => {
            this.pickImages();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
  pickImages() {
    this.imagePicker.getPictures({}).then(images => {
      console.log('images: ', images);
      for (const image of images) {
        this.copyFileToLocalDir(image);
      }
    }, err => {
      console.log(err);
    });
  }
  captureImage() {
    this.mediaCapture.captureImage().then((data: MediaFile[]) => {
      if (data.length > 0) {
        this.copyFileToLocalDir(data[0].fullPath);
      }
    }, (err: CaptureError) => {
      console.log(err);
    });
  }
  recordAudio() {
    this.mediaCapture.captureAudio().then((data: MediaFile[]) => {
      if (data.length > 0) {
        this.copyFileToLocalDir(data[0].fullPath);
      }
    }, (err: CaptureError) => {
      console.log(err);
    });
  }
  recordVideo() {
    this.mediaCapture.captureVideo().then((data: MediaFile[]) => {
      if (data.length > 0) {
        this.copyFileToLocalDir(data[0].fullPath);
      }
    }, (err: CaptureError) => {
      console.log(err);
    });
  }
  copyFileToLocalDir(path) {
    console.log('copying now ', path);
  }
  startRecording() {
    let mediaConstraints = {
      video: {
        mandatory: {
          minWidth: 1280,
          minHeight: 720
        }
      }, audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints as MediaStreamConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  errorCallback() {

  }
  successCallback(stream: MediaStream) {
    var options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }
  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }
  stopRecording() {
    let recordRTC = RecordRTC;
    console.log(recordRTC);
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }
  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }
  download() {
    this.recordRTC.save('video.webm');
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Upload Video',
      
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Video Title'
        },
        // {
        //   name: 'name2',
        //   type: 'text',
        //   id: 'name2-id',
        //   value: '',
        //   placeholder: 'Placeholder 1'
        // },
        {
          name: 'paragraph',
          type: 'textarea',
          id: 'paragraph',
          value: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
          placeholder: 'Whats happening in this video'
        },
        {
          name: 'name3',
          type: 'url',
          value: 'http://ionicframework.com',
          placeholder: 'Favorite site ever'
        },
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2020-01-12'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }
}
