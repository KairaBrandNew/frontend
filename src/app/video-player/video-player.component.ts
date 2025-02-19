import { Component, Input } from '@angular/core';
import { ProductVideoItemModel } from '../models/home.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  @Input() videos: ProductVideoItemModel[] = [];
  safeVideos: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Sanitize each video URL for Angular
    this.safeVideos = this.videos.map(url => 
      this.sanitizer.bypassSecurityTrustResourceUrl(url.videoUrl)
    );
  }
}
