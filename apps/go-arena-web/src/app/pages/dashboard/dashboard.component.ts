import { AfterViewInit, Component } from '@angular/core';
import { AuthService } from '@kafein/services';

@Component({
  selector: 'kafein-welcome',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {

  isCollapsed = true;
  username = 'Admin';

  constructor(public authService: AuthService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.isCollapsed = true);
  }

  logout(): void {
    this.authService.logout();
  }
}
