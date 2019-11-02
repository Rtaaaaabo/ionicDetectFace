import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';
import { IVideoOptions } from '../interfaces/video.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(
    private http: HttpClient,
    private videoCapturePlus: VideoCapturePlus,
  ) { }

  captureVideo(options): Promise<any> {
    return this.videoCapturePlus.captureVideo(options);
  }

}
