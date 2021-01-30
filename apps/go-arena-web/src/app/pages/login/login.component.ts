import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginDto } from '@kafein/services';
import { LocalStorageUtils } from '@kafein/utils';

@Component({
  selector: 'kafein-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFormGroup: FormGroup = new FormGroup({
    username: new FormControl('admin', { validators: [Validators.required] }),
    password: new FormControl('1234', { validators: [Validators.required] }),
    remember: new FormControl(false),
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  login(): void {
    this.loginFormGroup.updateValueAndValidity();

    if (this.loginFormGroup.valid) {
      const loginDto = this.loginFormGroup.value as LoginDto;

      this.authService.login(loginDto).subscribe(loginResponse => {
        LocalStorageUtils.setAccessToken(loginResponse.token);
        this.router.navigateByUrl('/');
      });
    }
  }
}
