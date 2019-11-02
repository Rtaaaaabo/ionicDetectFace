import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

const MEDIA_FILES_KEY = 'mediaFiles';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('myVideo', { static: true }) myVideo: any;
  constructor(
    private mediaCapture: MediaCapture,
    private storage: Storage,
    private media: Media,
    private file: File,
  ) { }

  recording() {
  }
}
