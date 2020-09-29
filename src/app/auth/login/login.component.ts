import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { User } from '@app/shared/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private router: Router) { }
  async onGoogleLogin() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {
  }
  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      this.checkUserIsVerified(user);
    }
    catch (error) { console.log(error) }

  }
  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {

      this.router.navigate(['/pagina']);
    } else if (user) {
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/register']);
    }
  }
}
