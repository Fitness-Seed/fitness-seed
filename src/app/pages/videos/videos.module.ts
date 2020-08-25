import { ViewVideosComponent } from './view-videos/view-videos.component';
import { NewVideoComponent } from './new-video/new-video.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { LowerBodyComponent } from './lower-body/lower-body.component';
import { UpperBodyComponent } from './upper-body/upper-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosPageRoutingModule } from './videos-routing.module';

import { VideosPage } from './videos.page';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Media } from '@ionic-native/media/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { File } from '@ionic-native/file/ngx';
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule} from '@angular/fire/storage';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideosPageRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyATKhKprckxK5O708x7fgnKpJgwEPB-W_I',
      authDomain: 'fitness-seed.firebaseapp.com',
      projectId: 'fitness-seed',
      storageBucket: 'fitness-seed.appspot.com',
    }),
    AngularFireStorageModule
  ],
  declarations: [VideosPage, UpperBodyComponent, LowerBodyComponent, ChallengesComponent, NewVideoComponent,
  ViewVideosComponent],
  entryComponents: [
    UpperBodyComponent, LowerBodyComponent, ChallengesComponent, NewVideoComponent, ViewVideosComponent
  ],
  // providers: [
  //   ImagePicker,
  //   MediaCapture,
  //   Media,
  //   PhotoViewer,
  //   StreamingMedia,
  //   File
  // ]
})
export class VideosPageModule {}
