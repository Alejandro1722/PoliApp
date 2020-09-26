import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth, private google: GooglePlus) { }

  ngOnInit() {
  }
  onLogout(){
    console.log('Logout!');
    this.afAuth.auth.signOut(); 
    this.google.disconnect(); 
    this.router.navigateByUrl('/login');
  }
}
