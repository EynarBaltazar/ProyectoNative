import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@app/shared/models/user.interface';
import { AuthService } from './../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterComponent implements OnInit {
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  registerForm = new FormGroup({
    

    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
    }
    catch (error) {
      console.log(error);
    }
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
 
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
}
