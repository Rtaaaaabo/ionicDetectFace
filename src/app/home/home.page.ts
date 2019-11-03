import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MediaCapture, CaptureVideoOptions, MediaFile } from '@ionic-native/media-capture/ngx';
import { Media, } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

const MEDIA_FILES_KEY = 'mediaFiles';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('myVideo', { static: true }) myVideo: any;
  mediaFiles = [];
  constructor(
    private mediaCapture: MediaCapture,
    private storage: Storage,
    private media: Media,
    private file: File,
  ) { }

  ionViewDidLoad() {
    this.storage.get('MEDIA_FILES_KEY').then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    });
  }

  playFile(file) {

  }

  recording() {
    let options: CaptureVideoOptions = {
      limit: 1,
      duration: 30,
    };
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
      this.storeMediaFiles(res);
    })
  }

  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    });
  }
}
