import { Component } from '@angular/core';
import { AuthService } from '@kafein/services';

@Component({
  selector: 'kafein-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  login(): void {
    this.authService.login({ username: 'admin', password: '1234' }).subscribe(loginResponse => {
      localStorage.setItem('access_token', JSON.stringify(loginResponse.token));
    });
  }
}
