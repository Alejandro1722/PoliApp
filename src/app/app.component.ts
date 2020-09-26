import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [   
       
    {
      title: 'Guías',
      url: '/clases',
      icon: 'book'
    },
    {
      title: 'Videos',
      url: '/video',
      icon: 'videocam'
    },
    {
      title: 'Simulador',
      url: '/simulador',
      icon: 'easel'
    },
    {
      title: 'Quienes Somos',
      url: '/q-somos',
      icon: 'chatbubble-ellipses'
    },
    {
      title: 'Contactenos',
      url: '/contacto',
      icon: 'mail'
    },  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router, 
    private afAuth: AngularFireAuth, 
    private google: GooglePlus
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/login')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  onLogout(){
    console.log('Logout!');
    this.afAuth.auth.signOut(); 
    this.google.disconnect(); 
    this.router.navigateByUrl('/login');
  }
}
