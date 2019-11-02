import { Component } from '@angular/core';
// import { VideoService } from '../services/video.service';
// import { VideoCapturePlusOptions } from '@ionic-native/video-capture-plus';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    // private videoService: VideoService
  ) { }

  recording() {
    // const option: VideoCapturePlusOptions = {
    //   limit: 1,
    //   highquality: true,
    //   portraitOverlay: 'assets/img/camera/overlay/portrait.png',
    //   landscapeOverlay: 'assets/img/camera/overlay/landscape.png',
    // };
    // this.videoService.captureVideo(option).then(
    //   (data) => console.log(data),
    //   (error) => console.log('Something went wrong'),
    // );
  }
}
