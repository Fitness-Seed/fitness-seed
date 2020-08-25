import { Media } from '../../models/media/media-model';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DynamicScriptLoaderService } from '../../../services/dynamic-script-loader.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { ImageData } from '../images-data/image-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GalleryService } from '../../../services/gallery/gallery.service';
@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.scss']
})
export class NewImageComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput', { static: false, read: ElementRef }) fileInput: ElementRef<HTMLInputElement>;
  player;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  images = ImageData;
  image: Media = new Media();
  newImageForm: FormGroup;
  file;
  saving = false;
  constructor(
    navParams: NavParams,
    public viewCtrl: ModalController,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private afStorage: AngularFireStorage,
    private galleryService: GalleryService,
    private _fb: FormBuilder
  ) {
    this.player = navParams.get('player');
    this.initializeForm();
  }

  ngOnInit() { }
  dismiss(result) {
    this.viewCtrl.dismiss({ url: result });
  }
  initializeForm() {
    this.newImageForm = this._fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required],
      type: ['image', Validators.required]
    });
  }
  ngAfterViewInit() {
    this.loadScripts();
  }
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('image-input').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
  loadImageFromDevice(event) {
    this.file = event.target.files[0];
    this.newImageForm.get('url').setValue(this.file);
    // const file = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsArrayBuffer(file);
    // reader.onload = () => {
    //   // get the blob of the image:
    //   const blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
    //   // create blobURL, such that we could use it in an image element:
    //   const blobURL: string = URL.createObjectURL(blob);
    //   console.log(blobURL);
    // };
    // reader.onerror = (error) => {
    //   // handle errors
    // };
  }
  save() {
    this.saving = true;
    const id = Math.random().toString(36).substring(2);
    const filePath = `images/${id}`;
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
          this.newImageForm.get('url').setValue(res);
          this.image = Object.assign({}, this.newImageForm.value);
          this.image.views = 0;
          this.image.isPublished = true;
          this.galleryService.create(this.image)
          .pipe(finalize(() => {
            this.saving = false;
            this.fileInput.nativeElement.value = '';
          }))
          .subscribe((res: Media) => {
            this.dismiss(res);
          }) 
         ;
        });
      })).subscribe(() => {
      });
  }
}
