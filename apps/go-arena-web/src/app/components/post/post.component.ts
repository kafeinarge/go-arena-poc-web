import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PostModel } from '@kafein/data';
import { NzImage, NzImageService } from 'ng-zorro-antd/image';
import { environment } from '../../../environments/environment';
import { ApproveButtonType } from './models/approve-button-type';

@Component({
  selector: 'kafein-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  ApproveButtonType = ApproveButtonType;
  size: string;
  fallbackImage: string;
  @Input() post: PostModel;
  @Input() approveButtonType = ApproveButtonType.TEXT;

  constructor(private nzImageService: NzImageService, private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.size = (Math.random() * (2000 - 1000) + 1000).toFixed(0);
    this.fallbackImage = environment.mockImageSourceUrl + this.size;
  }

  imagePreview(image: string) {
    const nzImage: NzImage = {
      src: this.domSanitizer.bypassSecurityTrustResourceUrl(image ? image : this.fallbackImage) as string,
      width: '40vw',
    };
    this.nzImageService.preview([nzImage]);
  }
}
