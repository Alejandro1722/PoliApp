import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
 export class LoginPage implements OnInit {
 user : User = new User();
  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }
  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if(user) {
      console.log('Successfully logged in!'); 
      this.router.navigateByUrl('/q-somos');
    }
  }
  async loginGoogle(){
    this.authSvc.loginWithGoogle().then(() => {
      this.router.navigateByUrl('/q-somos');
    }).catch (err => {
      alert("Los datos son incorrectos o no existe el usuario");
    })

    }
}

