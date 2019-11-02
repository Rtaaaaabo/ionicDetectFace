import { Component } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private videoService: VideoService) { }

  recording() {

  }
}
