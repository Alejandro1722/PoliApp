import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    
    
    {
      title: 'Perfil',
      url: 'login',
      icon: 'body'
    },
    {
      title: 'Clases',
      url: 'login',
      icon: 'book'
    },
    {
      title: 'Videos',
      url: 'videos',
      icon: 'film'
    },
    {
      title: 'Simulador',
      url: '/folder/Archived',
      icon: 'easel'
    },
    {
      title: 'Quienes Somos',
      url: '/q-somos',
      icon: 'chatbubble-ellipses'
    },
    {
      title: 'Contactenos',
      url: '/folder/Spam',
      icon: 'mail'
    },
    {
      title: 'Salir',
      url: '/folder/Spam',
      icon: 'power'
    }
  ];
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
}
