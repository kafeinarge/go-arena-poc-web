import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService, UserFacadeService} from '@kafein/services';
import {UserModel} from '@kafein/data';

@Component({
  selector: 'kafein-welcome',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit, OnInit {

  isCollapsed = true;
  userModel: UserModel;

  constructor(public authService: AuthService, public userFacadeService: UserFacadeService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.isCollapsed = true);
  }

  ngOnInit(): void {
    this.userFacadeService.getCurrentUser().subscribe(model => this.userModel = model);
  }

  logout(): void {
    this.authService.logout();
  }
}
