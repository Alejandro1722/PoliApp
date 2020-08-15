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
      url: '/',
      icon: 'body'
    },
    {
      title: 'Clases',
      url: '/clases',
      icon: 'book'
    },
    {
      title: 'Simulador',
      url: '/simulador',
      icon: 'easel'
    },
    {
      title: 'Quienes Somos',
      url: '/',
      icon: 'chatbubble-ellipses'
    },
    {
      title: 'Contactenos',
      url: '/contacto',
      icon: 'mail'
    },
    {
      title: 'Salir',
      url: '/login',
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
