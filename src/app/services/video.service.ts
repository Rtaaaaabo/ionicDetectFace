import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoCapturePlus, MediaFile } from '@ionic-native/video-capture-plus';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: HttpClient,
    private videoCapturePlus: VideoCapturePlus,
  ) { }

  captureVideo(options): Promise<MediaFile[]> {
    return this.videoCapturePlus.captureVideo(options);
  }

}
