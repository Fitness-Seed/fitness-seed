import { VideoService } from './../../../services/videos/video.service';
import { VideoSubCategory } from './../dto/video-sub-category-dto';
import { VideoMainCategory } from './../dto/video-main-category-dto';
import { CategoryData, mainCategories } from './../models/category-data';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { DynamicScriptLoaderService } from '../../../services/dynamic-script-loader.service';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Media } from '../../models/media/media-model';
import { ImageData } from '../../gallery/images-data/image-data';
import { Video } from '../dto/video-dto';
@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.scss'],
})
export class NewVideoComponent implements OnInit {
  mainCategory: VideoMainCategory;
  categories: VideoSubCategory[] = [];;
  file;
  video: Video = new Video();
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  newVideoForm: FormGroup;
  saving = false;
  constructor(
    navParams: NavParams,
    public viewCtrl: ModalController,
    private afStorage: AngularFireStorage,
    private fb: FormBuilder,
    private videoService: VideoService,
  ) {
    this.mainCategory = navParams.get('main_category');
    if (this.mainCategory) {
      this.categories = this.mainCategory.subCategories;
    }
    this.initializeForm();
  }

  ngOnInit() { }
  dismiss(result) {
    this.viewCtrl.dismiss({ videoUrl: result });
  }
  initializeForm() {
    this.newVideoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
      type: ['video', Validators.required],
      subCategoryId: ['', Validators.required]
    });
  }
  loadVideoFromDevice(event) {
    this.file = event.target.files[0];
    this.newVideoForm.get('url').setValue(this.file);
  }
  save() {
    this.saving = true;
    const id = Math.random().toString(36).substring(2);
    const filePath = `videos/${id}`;
    this.ref = this.afStorage.ref(filePath);
    this.task = this.afStorage.upload(filePath, this.file);
    let downloadURL: Observable<string>;
    let uploadState: Observable<string>;
    uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges()
      .pipe(finalize(() => {
        downloadURL = this.ref.getDownloadURL();
        downloadURL.subscribe((res) => {
          this.newVideoForm.get('url').setValue(res);
          this.video = Object.assign({}, this.newVideoForm.value);
          this.video.views = 0;
          this.video.isPublished = true;
          this.video.category = this.newVideoForm.get('subCategoryId').value;
          this.videoService.create(this.video).pipe(finalize(() => {
            this.saving = false;
          })).subscribe((video: Video) => {
            this.dismiss(video);
          });
        });
      })).subscribe(() => {
      });
  }
}
