import { GalleryService } from './../../services/gallery/gallery.service';
import { ImageModalPageModule } from './image-modal/image-modal.module';
import { NewImageComponent } from './new-image/new-image.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryPageRoutingModule } from './gallery-routing.module';

import { GalleryPage } from './gallery.page';
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { GalleryResourceService } from '../../services/gallery/gallery-resource.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GalleryPageRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyATKhKprckxK5O708x7fgnKpJgwEPB-W_I',
      authDomain: 'fitness-seed.firebaseapp.com',
      // databaseURL: 'https://fitness-seed.firebaseio.com',
      projectId: 'fitness-seed',
      storageBucket: 'fitness-seed.appspot.com',
      // messagingSenderId: '297521422777',
      // appId: '1:297521422777:web:7779078317c15bdce81668',
      // measurementId: 'G-HQKNDHT6EN'
    }),
    AngularFireStorageModule,
    ImageModalPageModule
  ],
  declarations: [GalleryPage, NewImageComponent],
  entryComponents: [
    NewImageComponent
  ],
  providers: [
    GalleryResourceService,
    GalleryService
  ]
})
export class GalleryPageModule {}
