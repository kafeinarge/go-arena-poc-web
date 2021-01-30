import { Component, OnInit } from '@angular/core';
import { WallFacadeService } from '../../../../../../libs/services/src';

@Component({
  selector: 'kafein-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(private wallFacadeService: WallFacadeService) {
  }

  ngOnInit() {
    this.wallFacadeService.allPosts().subscribe();
  }
}
