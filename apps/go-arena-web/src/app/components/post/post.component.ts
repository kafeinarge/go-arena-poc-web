import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApprovalEnum, PostModel } from '@kafein/data';
import { WallFacadeService } from '@kafein/services';
import { NzImageService } from 'ng-zorro-antd/image';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { environment } from '../../../environments/environment';
import { ApproveButtonType } from './models/approve-button-type';

@Component({
  selector: 'kafein-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  ApproveButtonType = ApproveButtonType;
  ApprovalEnum = ApprovalEnum;
  size: string;
  fallbackImage: string;
  showApprovalButtons = false;
  disableApprovalButtons = true;

  @Input() post: PostModel;
  @Input() approveButtonType = ApproveButtonType.TEXT;

  constructor(
    private nzImageService: NzImageService,
    private domSanitizer: DomSanitizer,
    private wallFacadeService: WallFacadeService,
    private notification: NzNotificationService,
    private modal: NzModalService,
  ) {
  }

  ngOnInit(): void {
    if (this.post.preview) {
      this.post.preview = 'data:image/jpg;base64,' + this.post.preview;
    }
    this.size = (Math.random() * (2000 - 1000) + 1000).toFixed(0);
    this.fallbackImage = environment.fallbackImage;
  }

  showConfirm(postId: string, approvalType: ApprovalEnum): void {
    const title = approvalType === ApprovalEnum.APPROVED ?
      'Are you sure to <b style="color: #0f77ff;">approve</b> this post?' :
      'Are you sure to <b style="color: red;">decline</b> this post?';

    const danger = approvalType === ApprovalEnum.DECLINED;

    this.modal.confirm({
      nzTitle: title,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: danger,
      nzOnOk: () => this.sendApprovalRequest(postId, approvalType),
      nzCancelText: 'No',
    });
  }

  sendApprovalRequest(postId: string, approvalType: ApprovalEnum): void {
    this.wallFacadeService.postApproval(postId, approvalType).subscribe(
      () => {
        this.notification.success(`Post ${approvalType.toLocaleLowerCase()} successfully`, null);
        this.disableApprovalButtons = false;
      },
    );
  }
}
