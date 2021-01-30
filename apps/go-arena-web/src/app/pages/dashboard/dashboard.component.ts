import { Component } from '@angular/core';
import { AuthService } from '@kafein/services';

@Component({
  selector: 'kafein-welcome',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  isCollapsed = false;
  username = 'Admin';

  constructor(public authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }
}
