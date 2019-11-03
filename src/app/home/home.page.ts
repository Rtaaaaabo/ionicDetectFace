import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MediaCapture, CaptureVideoOptions, MediaFile } from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
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
    if (file.name.indexOf('.wav')) {
      const auditFile: MediaObject = this.media.create(file.localURL);
      auditFile.play();
    } else {
      const video = this.myVideo.nativeElement;
      video.src = this.myVideo.localURL;
    }
  }

  recording() {
    const options: CaptureVideoOptions = {
      limit: 1,
      duration: 30,
    };
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
      // this.storeMediaFiles(res);
      const captureFile = res[0];
      console.log('my file: ', captureFile);
      const fileName = captureFile.name;
      const dir = captureFile['localURL'].split('/');   // LOCAL Pathの設定をする
      dir.pop();
      const fromDirectory = dir.join('/');
      const toDirectory = this.file.dataDirectory;

      this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then(res => {
        const url = res.nativeURL.replace(/^file:\/\//, '');
        this.storeMediaFiles([{ name: fileName, size: captureFile.size, localURL: url }]);
      });
    });
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
