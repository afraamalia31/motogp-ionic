import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public router: Router,
    public app: AppService
  ) { }

  email: string;
  password: string;

  masuk() {
    this.app.login(this.email, this.password).then( user => {
      const uid = user.user.uid;

      this.app.user(uid).subscribe((res: any) => {
        if (res.role == 'admin') {
          this.router.navigate(['home']);
        }

        else {
          this.email = null;
          this.password = null;
          this.app.toast('Akun ini tidak memiliki akses');
          this.app.logout();
        }
      })

    }).catch((err: firebase.FirebaseError) => {
      this.email = null;
      this.password = null;

      if (err.code == 'auth/invalid-email') {this.app.toast('Format email salah'); }
      if (err.code == 'auth/user-not-found') {this.app.toast('Akun not found'); }
      if (err.code == 'auth/wrong-password') {this.app.toast('Password not found!');}

      console.log(err.code);
    })
  }

  ngOnInit() {
  }

}
