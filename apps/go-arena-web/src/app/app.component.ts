import { Component, OnInit } from '@angular/core';
import { WallFacadeService } from '@kafein/services';

@Component({
  selector: 'kafein-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'go-arena-web';

  constructor(private wallFacadeService: WallFacadeService) {
  }

  ngOnInit(): void {
    this.wallFacadeService.allPosts().subscribe(allPosts => console.log({allProducts: allPosts}));
  }
}
